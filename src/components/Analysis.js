import React from 'react'
import Styles from '../styles/Analysis.module.css'
import Questions from './Questions';

function Analysis({ answers }) {
  return (
    <div className={Styles.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Questions answers={answers} />
    </div>
  );
}

export default Analysis;
