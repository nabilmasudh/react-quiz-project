import React from 'react'
import Styles from '../styles/Analysis.module.css'
import Question from './Question';

function Analysis() {
    return (
      <div class={Styles.analysis}>
        <h1>Question Analysis</h1>
        <h4>You answerd 5 out of 10 questions correctly</h4>
        <Question/>
      </div>
    );
}

export default Analysis
