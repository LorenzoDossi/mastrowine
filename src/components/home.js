
import React from "react"

import homeStyles from './home.module.scss'
import Heading from './heading'
import { useSpring, animated } from 'react-spring'

const Home = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <>
        <div className={homeStyles.container}>
        <div className={homeStyles.inner}>
            <div className={homeStyles.home}>
                
            <iframe frameborder="0" height="100%" width="100%"
                src="https://youtube.com/embed/9TI0VTLDnkI?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&autohide=1">
            </iframe>
            </div>
        </div>
        <div className={homeStyles.heading}>
        <div className={homeStyles.innerHeading}>
            <h2>Tarsì è un'agenzia pubblicitaria specializzata nel web developement, sviluppo app e gestione social </h2>
        </div>
        </div>
        <div className={homeStyles.body}>
            <Heading />
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
            <div className="row">
                    <div className={homeStyles.outherSquare}>
                    <div className={homeStyles.innerSquare}>
                        
                    </div>
                <div className={homeStyles.innerSquare}>
                    
                </div>
                </div>
            </div>
            <div className="row">
                <div className={homeStyles.outherSquare}>
                <div className={homeStyles.innerSquare}>
                    
                </div>
                <div className={homeStyles.innerSquare}>
                    
                </div>
                </div>
            </div>
            <div className="row">
                <div className={homeStyles.outherSquare}>
                <div className={homeStyles.innerSquare}>
                    
                </div>
                <div className={homeStyles.innerSquare}>
                    
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )   
}

export default Home
