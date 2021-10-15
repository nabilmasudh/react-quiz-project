import React from 'react'
import Styles from '../styles/Video.module.css'
import image from '../assets/img/3.jpg'

export default function Video({ title, id, noq }) {
  return (
    <div className={Styles.video}>
      <img
        src={image}
        alt={title}
      />
      <p>{title}</p>
      <div className={Styles.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
