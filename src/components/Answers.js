import React from 'react'
import Styles from "../styles/Answers.Module.css";
import Checkbox from './Checkbox';
function Answers() {
    return (
      <div className={Styles.answers}>
        <Checkbox className={Styles.answer} text="Test Answer" />
      </div>
    );
}

export default Answers
