import BigCard from "../big-card/BigCard";
import SmallCard from "../small-card/SmallCard";
import "./CardMiddle1.css";
import React from "react";

export default function CardMiddle1(props) {
  return (
    <div className="card-container-1">
      <div className="card-content">
        <p className="title-card">{props.title}</p>
        <p className="subtitle-card">{props.subtitle}</p>
        <SmallCard pathImgSmallCard="/images/img-products/model_jaqueta-jeans.jpg" verif={true} />
        <SmallCard
          pathImgSmallCard="/images/img-products/model_camisa-veludo-azul.jpg"
          verif={false}
        />
      </div>
      <BigCard pathImgBigCard="/images/img-products/model_moletom-amarelo.jpg" />
    </div>
  );
}
