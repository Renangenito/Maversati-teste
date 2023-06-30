import "./SmallCard.css";
import React, { Fragment } from "react";

export default function SmallCard(props) {
  return (
    <Fragment>
      {props.verif === true && (
        <img
          className="img-smallcard marginright"
          src={props.pathImgSmallCard}
          alt="Imagem Pequena no Card"
        />
      )}
      {props.verif === false && (
        <img
          className="img-smallcard"
          src={props.pathImgSmallCard}
          alt="Imagem Pequena no Card"
          async
        />
      )}
    </Fragment>
  );
}
