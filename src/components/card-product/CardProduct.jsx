import "./CardProduct.css";
import React, { useState, useEffect } from "react";

export default function CardProduct(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (isDialogOpen) {
      const timer = setTimeout(() => {
        setIsDialogOpen(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isDialogOpen]);

  const handleImageClick = () => {
    setIsDialogOpen(true);
  };

  const handleBuyClick = () => {
    const product = {
      title: props.titleproduct,
      value: props.valueproduct,
      collor: props.collorproduct,
      image: props.imgcard,
    };

    const existingCart = JSON.parse(localStorage.getItem("carrinho")) || [];
    const updatedCart = [...existingCart, product];

    localStorage.setItem("carrinho", JSON.stringify(updatedCart));

    // Exibir uma mensagem ou redirecionar para a página do carrinho de compras
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <div className="product-container">
      <img
        src={props.imgcard}
        className="card-product-img"
        alt="Imagem do Produto"
        onClick={handleImageClick}
      />
      {isDialogOpen && (
        <div className="product-dialog">
          <p>Detalhes do Produto:</p>
          <p>Nome: {props.titleproduct}</p>
          <p>Valor: R$ {props.valueproduct}</p>
          <p>{props.description}</p>
        </div>
      )}
      <div>
        <p className="text-card-product">{props.titleproduct}</p>
        <p className="value-product">R$ {props.valueproduct}</p>
      </div>
      <button type="button" className="btn-card-product" onClick={handleBuyClick}>
        Comprar
      </button>
    </div>
  );
}
