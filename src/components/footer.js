import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import footerStyles from './footer.module.scss'
import logo from '../images/tarsi_logo-w.svg'

const Footer = () => (
  <footer className={footerStyles.footer}>
      <div className={footerStyles.logo}>
          <img src={logo} alt="tarsi"/>
      </div>
    <div className={footerStyles.block}>
    <section> 
        <ul className={footerStyles.left}>
            <li>Email info@tarsi.it</li>
            <li>Telefono +39 030 991 1141</li>
            <li>Sede Operativa Via Brescia 52, Desenzano del Garda (BS)</li>
            <li>Sede Legale Viale Andreis 74, Desenzano del Garda (BS)</li>
        </ul>
    </section>
    <section>
        <ul className={footerStyles.right}>
            <li></li>
            <li>Tarsì Srls</li>
            <li>P.I. e C.F. 03709220986</li>
            <li>R.E.A. 556403</li>
            <li>©2019 Copyright Tarsì Srls</li>
            <li>Privacy Policy Cookie Policy</li>
        </ul>
    </section>
    </div>

  </footer>
)

export default Footer
