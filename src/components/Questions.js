import React from 'react'
import Styles from '../styles/Question.module.css'
import Answers from './Answers';
function Question({ answers = []}) {
  return answers.map((answer, index) => (
    <div className={Styles.question} key={index}>
      <div className={Styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}

export default Question
