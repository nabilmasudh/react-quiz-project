import React from "react";
import Styles from "../styles/Button.module.css";

function Button({className, children }) {
  return <div className={`${Styles.button} ${className}`}>{children}</div>;
}

export default Button;
