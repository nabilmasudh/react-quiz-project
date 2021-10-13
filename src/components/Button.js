import React from "react";
import Styles from "../styles/Button.module.css";

function Button({className, children, ...rest }) {
  return <button className={`${Styles.button} ${className}`} {...rest}>{children}</button>;
}

export default Button;
