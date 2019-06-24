
import React from "react"

import headingStyles from './heading.module.scss'

const Heading = (props) => (
    <div className={headingStyles.heading}>
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className={headingStyles.inner}>
                    <h2>{props.title}</h2>
                    <p className="heading-p">{props.text}</p>
                </div>
            </div>
        </div>
    </div>
)

export default Heading
