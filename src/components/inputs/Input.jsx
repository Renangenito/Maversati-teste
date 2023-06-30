import "./Input.css";
import React, { Fragment } from "react";

export default function Input(props) {
  return (
    <Fragment>
      <input
        type={props.typeInput}
        name={props.nameInput}
        id={props.idInput}
        placeholder={props.placeholder}
        className="input-text"
        value={props.value}
        onChange={props.onChange}
      />
    </Fragment>
  );
}
