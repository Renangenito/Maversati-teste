import ShopCard from "../shop-card/ShopCard";
import "./CardMiddle3.css";
import React from "react";

export default function CardMiddle3(props) {
  return (
    <div className="card-container-3">
      <div className="text-midlecard3">
        <p className="text-titlecard3">{props.titleCard3}</p>
        <p className="text-subtitlecard3">{props.subTitleCard3}</p>
      </div>
      <div className="cards-content">
        <ShopCard
          pathShopCard="/images/img-products/model_vestido-branco.jpg"
          titleProduct="Vestido de Algodão Branco"
        />
        <ShopCard
          pathShopCard="/images/img-products/model_jaqueta-marrom.jpg"
          titleProduct="Sobretudo Marrom-Terra"
        />
        <ShopCard
          pathShopCard="/images/img-products/model_moletom-cinza.jpg"
          titleProduct="Moletom Cinza Claro"
        />
      </div>
    </div>
  );
}
