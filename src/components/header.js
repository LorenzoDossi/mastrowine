import React from "react"

import { Link } from "gatsby"
import headerStyles from './header.module.scss'
import logo from '../images/smallLogo.svg'

export default class Header extends React.Component {

  componentDidMount() {
    let nav = this.nav
    window.addEventListener("scroll", function(e) {
      nav.style.opacity = window.pageYOffset / 1000
    })
  }

  render() {
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.background}
        ref={nav => {
          this.nav = nav
        }}></div>
        <nav className={headerStyles.navList}>
          <ul>
            <li>scopri</li>
            <li>arte in etichetta</li>
            <li><img src={logo} alt=""/></li>
            <li>esperienze</li>
            <li>contatti</li>
          </ul>
        </nav>
      </header>
    )
  }
}

