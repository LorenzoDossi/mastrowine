import { Link } from "gatsby"
import React from "react"

import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

import footerStyles from './footer.module.scss'
import logo from '../images/logo.svg'

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className="row">
      <div className="col px-0">
        <div className={footerStyles.contact}>
          <div className={footerStyles.innerContact}>
            <h1>get in touch</h1>
            <h2>We make wine with a thought of our customers, therefore the team</h2>
            <h3>address</h3>
            <p>3867 Robinson Road, Historic Oaklawn Plantation</p>
            <h3>Telephone</h3>
            <p>3407877625</p>
            <h3>E-mail</h3>
            <p>info@mastrowine.com</p>
          </div>
        </div>
        <div className={footerStyles.social}>
          <img src={logo} alt=""/>
          <div className={footerStyles.socialLink}>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>  
        <div className={footerStyles.credits}>
          <p>Open Monday-Friday 7am-4pm</p>
          <p>Via Brescia 17, Desenzano D/G</p>
          <p>555.344.3447</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
