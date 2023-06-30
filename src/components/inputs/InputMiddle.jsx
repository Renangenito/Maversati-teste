import "./Input.css";
import React, { Fragment } from "react";

export default function InputMiddle(props) {
  return (
    <Fragment>
      <input
        type={props.typeInput}
        name={props.nameInput}
        id={props.idInput}
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
        onChange={props.onChange}
      />
    </Fragment>
  );
}
