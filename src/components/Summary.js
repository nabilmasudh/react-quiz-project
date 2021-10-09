import React from 'react'
import Styles from '../styles/Summary.module.css'
import image from "../assets/img//success.png";

function Summary() {
    return (
      <div className={Styles.summary}>
        <div className={Styles.point}>
          <p className={Styles.score}>
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={Styles.badge}>
          <img src={image} alt="Success" />
        </div>
      </div>
    );
}

export default Summary
