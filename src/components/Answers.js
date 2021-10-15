import React, { Fragment } from "react";
import Styles from "../styles/Answers.Module.css";
import Checkbox from "./Checkbox";
export default function Answers({ options = [], handleChange, input }) {
  return (
    <div className={Styles.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className={Styles.answer}
              key={index}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              className={`${Styles.answer} ${
                option.correct
                  ? Styles.correct
                  : option.checked
                  ? Styles.wrong
                  : null
              }`}
              key={index}
              text={option.title}
              value={index}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
