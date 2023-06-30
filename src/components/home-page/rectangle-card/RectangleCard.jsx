import "./RectangleCard.css";
import React, { Fragment } from "react";

export default function RectangleCard(props) {
  return (
    <Fragment>
      <img
        className="img-rectanglecard"
        src={props.pathImgRectangleCard}
        async
        alt="Imagem Retangular no Card"
      />
    </Fragment>
  );
}
