
import React from "react"

import headingStyles from './heading.module.scss'

const Heading = (props) => (
    <div className={headingStyles.heading}>
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className={headingStyles.inner}>
                    <h2>degustazione</h2>
                    <p className="heading-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis perspiciatis dignissimos similique veniam, laboriosam nulla accusantium consectetur libero soluta numquam maxime.</p>
                </div>
            </div>
        </div>
    </div>
)

export default Heading
