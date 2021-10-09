import React from 'react'
import Video from './Video';
import Styles from '../styles/Videos.module.css'
import { Link } from 'react-router-dom';


function Videos() {
    return (
      <div className={Styles.videos}>
        <Link to='/quiz'><Video /></Link>
        <Link to='/quiz'><Video /></Link>
        <Link to='/quiz'><Video /></Link>
        <Link to='/quiz'><Video /></Link>
        <Link to='/quiz'><Video /></Link>
        <Link to='/quiz'><Video /></Link>
        <Link to='/quiz'><Video /></Link>
        <Link to='/quiz'><Video /></Link>
      </div>
    );
}

export default Videos
