import React from 'react'
import Styles from "../styles/Miniplayer.module.css";
import images from '../assets/img/3.jpg'

function MiniPlayer() {
    return (
      <div className={`${Styles.miniPlayer} ${Styles.floatingBtn}`}>
        <span className={`material-icons-outlined ${Styles.open}`}>
          {" "}
          play_circle_filled{" "}
        </span>
        <span className={`material-icons-outlined ${Styles.close}`}>
          {" "}
          close{" "}
        </span>
        <img src={images} alt="Alt Tag" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    );
}

export default MiniPlayer
