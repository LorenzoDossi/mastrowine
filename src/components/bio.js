
import React from "react"

import bioStyles from './bio.module.scss'
import img from '../images/mastro.jpeg'
import sign from '../images/sign.png'

const Bio = (props) => (
        <div className="row">
            <div className="col-6 px-0">
                <figure className={bioStyles.figure}>
                    <img src={img} alt=""/>
                </figure>
            </div>
            <div className="col-6 px-0">
                <div className={bioStyles.bio}>
                    <div className={bioStyles.innerBio}>
                        <h1>mastro wine</h1>
                        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h2>
                        <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris. Maecenas vehicula quam vel urna pulvinar, quis faucibus quam pellentesque. Sed vitae pellentesque velit. Etiam nec ornare tortor.</p>
                        <img src={sign} alt=""/>
                    </div>
                </div>
            </div>
        </div>
)

export default Bio
