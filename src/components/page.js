import React, { Component } from 'react'
import img from '../images/web-intro.jpg'
import pageStyles from './page.module.scss'
import { FaUsers } from 'react-icons/fa'
import { IoIosArrowUp} from 'react-icons/io'
import Heading from './heading'
import Section from './section'

export default class Page extends Component {

    render() {
        return (
            <div className={pageStyles.page}>
                 <div className={pageStyles.stop}>
                <div className={pageStyles.heading}>
                    <img src={img} alt="image"/> 
                </div>

                <div className={pageStyles.top}>
                    <div className={pageStyles.inner}>
                        <span className={pageStyles.icon}><FaUsers /></span>
                        <h2>{this.props.headTitle}</h2>
                        <h3>{this.props.headSubtitle}</h3>
                        <span className={pageStyles.arrow}><IoIosArrowUp /></span>
                    </div>
                </div>
                </div>

                <div className={pageStyles.body}>
                    <Heading 
                    title={this.props.title}
                    text={this.props.text}
                    />
                    <Section />

                </div>
            </div>
        )
    }
}
