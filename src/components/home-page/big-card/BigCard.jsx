import "./BigCard.css";
import React, { Fragment } from "react";

export default function BigCard(props) {
  return (
    <Fragment>
      <img className="img-bigcard" src={props.pathImgBigCard} async alt="Imagem Grande no Card" />
    </Fragment>
  );
}
