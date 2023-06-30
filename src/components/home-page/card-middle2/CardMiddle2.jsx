import BigCard from "../big-card/BigCard";
import RectangleCard from "../rectangle-card/RectangleCard";
import "./CardMiddle2.css";
import React from "react";

export default function CardMiddle2(props) {
  return (
    <div className="card-container-2">
      <BigCard pathImgBigCard="/images/img-products/cabide-estilo1.jpg" />
      <div className="card-content-2">
        <RectangleCard pathImgRectangleCard="/images/img-products/cabide-estilo2.jpg" />
        <p className="title-card2">{props.title}</p>
        <p className="subtitle-card2">{props.subtitle}</p>
      </div>
    </div>
  );
}
