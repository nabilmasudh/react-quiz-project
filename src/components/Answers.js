import React from "react";
import Styles from "../styles/Answers.Module.css";
import Checkbox from "./Checkbox";
export default function Answers({ options = [], handleChange }) {
  return (
    <div className={Styles.answers}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          className={Styles.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
