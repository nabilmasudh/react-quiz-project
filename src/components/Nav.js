import React from 'react'
import logo from "../assets/img/logo-bg.png";
import Account from './Account'
import Styles from '../styles/Nav.module.css'
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav className={Styles.nav}>
        <ul>
          <li>
            <Link to="/" className={Styles.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </Link>
          </li>
        </ul>
        <Account />
      </nav>
    );
}

export default Nav
