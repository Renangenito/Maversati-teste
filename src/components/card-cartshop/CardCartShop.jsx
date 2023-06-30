import "./CardCartShop.css";
import React from "react";

export default function CardCartShop(props) {
  const handleRemoveItem = () => {
    const cartItemsString = localStorage.getItem("carrinho");
    if (cartItemsString) {
      const parsedCartItems = JSON.parse(cartItemsString);
      const updatedCartItems = parsedCartItems.filter((item) => item.title !== props.title);
      localStorage.setItem("carrinho", JSON.stringify(updatedCartItems));
      window.location.reload(); // Recarrega a página
    }
  };
  return (
    <div className="card-shop-component">
      <img src={props.imgcard} alt="Imagem Produto no Carrinho" className="img-cartshop" />
      <div>
        <div className="title-product-component">
          <p className="text-cardshop-product">{props.title}</p>
          <p className="text-cardshop-product">R$ {props.value}</p>
        </div>
        <div className="description-product-component">
          <p className="subtext-cardshop-product">Tamanho: M</p>
          <p className="subtext-cardshop-product">Cor: {props.collor}</p>
          <p className="subtext-cardshop-product">Qtd: 1</p>
          <button type="button" className="btn-remove-card" onClick={handleRemoveItem}>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}
