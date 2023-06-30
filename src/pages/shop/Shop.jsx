import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Shop.css";
import CardProduct from "../../components/card-product/CardProduct";
import { products } from "../../data/database-clothing";

export default function Shop() {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const { nome, cor, tipo } = product;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return (
      nome.toLowerCase().includes(lowerCaseSearchTerm) ||
      cor.toLowerCase().includes(lowerCaseSearchTerm) ||
      tipo.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  const sortProducts = (products) => {
    switch (selectedOption) {
      case "nome-asc":
        return [...products].sort((a, b) => a.nome.localeCompare(b.nome));
      case "maior-preco":
        return [...products].sort((a, b) => b.valor - a.valor);
      case "menor-preco":
        return [...products].sort((a, b) => a.valor - b.valor);
      default:
        return products;
    }
  };

  return (
    <div className="shop-page">
      <header className="navbar">
        <Navbar />
      </header>
      <div className="inputs-shop">
        <input
          type="text"
          placeholder="Pesquise por nome, cor, tipo..."
          className="input-search-shop"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <p className="text-input-shop">Ordene por:</p>
        <div className="checkbox-container">
          <input
            type="checkbox"
            value="nome-asc"
            className="checkbox-search-shop"
            checked={selectedOption === "nome-asc"}
            onChange={handleOptionChange}
          />
          <label className="label-search-shop" htmlFor="nome-asc">
            Nome a-z
          </label>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            value="maior-preco"
            className="checkbox-search-shop"
            checked={selectedOption === "maior-preco"}
            onChange={handleOptionChange}
          />
          <label className="label-search-shop" htmlFor="maior-preco">
            Maior Preço
          </label>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            value="menor-preco"
            className="checkbox-search-shop"
            checked={selectedOption === "menor-preco"}
            onChange={handleOptionChange}
          />
          <label className="label-search-shop" htmlFor="menor-preco">
            Menor Preço
          </label>
        </div>
      </div>
      <div className="cards-products">
        {sortProducts(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
          <CardProduct
            key={product.id}
            imgcard={product.imagem}
            titleproduct={product.nome}
            valueproduct={product.valor}
            description={product.descricao}
            collorproduct={product.cor}
          />
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
