
import React from "react"

import viniTopBarStyles from './viniTopBar.module.scss'

const ViniTopBar = (props) => (
        <div className="row">
            <div className="col px-0">
                <div className={viniTopBarStyles.container}>
                    <div className={viniTopBarStyles.innerContainer}>
                    </div>
                        <h1>le mie classifiche</h1>
                        <p>scopri</p>  
                </div>
            </div>
        </div>
)

export default ViniTopBar
