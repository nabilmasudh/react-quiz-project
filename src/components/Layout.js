import React from 'react'
import Nav from './Nav'
import Styles from '../styles/Layout.module.css'

function Layout({children}) {
    return (
      <>
        <Nav />
        <main className={Styles.main}>
          <div className={Styles.container}>{children}</div>
        </main>
      </>
    );
}

export default Layout
