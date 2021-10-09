import React from 'react'
import Styles from '../styles/Question.module.css'
import Answers from './Answers';
function Question() {
    return (
      <div className={Styles.question}>
        <div className={Styles.qtitle}>
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers/>
      </div>
    );
}

export default Question
