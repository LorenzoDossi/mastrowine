
import PropTypes from "prop-types"
import React from "react"
import { FaPhone } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { FaPalette } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import { FaPaintBrush } from 'react-icons/fa'

import { Link } from "gatsby"
import headerStyles from './header.module.scss'
import logo from '../images/tarsi_logo.svg'

const Header = () => (
  <header className={headerStyles.header}>
    <div className={headerStyles.inner}>
    <div className={headerStyles.logo}> 
    <Link to="/">
      <img src={logo} alt="Tarsi"/>
      </Link>
    </div>
    <nav>
      <ul className={headerStyles.navList}>
      <Link to="/app"><li>
            <span className={headerStyles.hide}><FaPhone /> <span className={headerStyles.info}>App e Software</span>  </span>
            <span className={headerStyles.linktext}><span className={headerStyles.icon}><FaPhone /></span>App e Software</span>
            </li></Link>
            <Link to="/web"><li>
            <span className={headerStyles.hide}><FaLaptopCode /> <span className={headerStyles.info}>Web Marketing</span>  </span>
            <span className={headerStyles.linktext}><span className={headerStyles.icon}><FaLaptopCode /></span>Web Marketing</span>
             </li></Link>
             <Link to="/social"><li>
        
            <span className={headerStyles.hide}><FaUsers /> <span className={headerStyles.info}>Social Network</span>  </span>
            <span className={headerStyles.linktext}><span className={headerStyles.icon}><FaUsers /></span>Social Network</span>
            </li></Link>
            <Link to="/design"><li>
            <span className={headerStyles.hide}><FaPalette /> <span className={headerStyles.info}>Grafica e Design</span>  </span>
            <span className={headerStyles.linktext}><span className={headerStyles.icon}><FaPalette /></span>Grafica e Design</span>
            </li></Link> 
        
            <a href="https://itownapp.it/"><li>
          <span className={headerStyles.hide}><FaBuilding /> <span className={headerStyles.info}>Social Network</span>  </span>
            <span className={headerStyles.linktext}><span className={headerStyles.icon}><FaBuilding /></span>Social Network</span>
            </li></a>
        
            <a href="https://itownarte.com/"><li>
          <span className={headerStyles.hide}><FaPaintBrush /> <span className={headerStyles.info}>Social Network</span>  </span>
            <span className={headerStyles.linktext}><span className={headerStyles.icon}><FaPaintBrush /></span>Social Network</span>
            </li></a>
      </ul>
    </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
