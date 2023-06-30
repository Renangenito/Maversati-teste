import "./ShopCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ShopCard(props) {
  return (
    <div className="shopcard-container">
      <img className="img-shop" src={props.pathShopCard} async alt="Imagem do Card-Shop" />
      <p className="description-cardshop">{props.titleProduct}</p>
      <div>
        <Link to={"/shop"}>
          <button type="button" className="btn-cardshop">
            Saiba Mais
          </button>
        </Link>
      </div>
    </div>
  );
}
