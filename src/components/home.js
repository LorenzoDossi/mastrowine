import React, { Component } from 'react'
import img from '../images/wine.jpeg'
import logo from '../images/Logo.svg'
import homeStyles from './home.module.scss'
import { IoIosArrowUp} from 'react-icons/io'
import Heading from './heading'

export default class Home extends Component {

    render() {
        return (
            <div className={homeStyles.home}>
                <div className={homeStyles.background}>
                    <img src={img} alt="" />
                </div>
                <div className={homeStyles.logo}>
                    <div className={homeStyles.innerLogo}>
                        <img 
                            src={logo} 
                            alt=""
                        />
                    </div>
                </div>
            </div>
        )
    }
}
