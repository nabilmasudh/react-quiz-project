import React from 'react'
import Style from '../styles/Video.module.css'
import image from '../assets/img/3.jpg'

function Video() {
    return (
      <a href="quiz.html">
        <div className={Style.video}>
          <img src={image} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={Style.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    );
}

export default Video
