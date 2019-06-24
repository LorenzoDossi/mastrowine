
import React from "react"

import sectionStyles from './section.module.scss'
import social01 from '../images/social_01.jpg'

const Section = () => (
    <div className={sectionStyles.section}>
    <div className="row px-0">
    <div className="col-lg-10 offset-lg-1">

    <section className="row px-0">
    <div className="col-6">
        <div className={sectionStyles.text}>
        <h3>Dicci gli obiettivi e al traguardo ti portiamo noi.</h3>
        <hr/>
        <p>Tutti possono guardare, tutti possono pensare. Progettiamo una strategia insieme, poi ai testi e le immagini ci pensiamo noi.
Sappiamo come e quando pubblicare post e aggiornamenti in modo da diffondere ogni pubblicazione al meglio.</p>
        </div>
    </div>
        <div className="col-6 p-0">
            <figure>
                <img src={social01} alt=""/>
            </figure>
        </div>
    </section>
    <section className="row">
    <div className="col-6 order-2 p-0">
        <div className={sectionStyles.text}>
        <h3>Sei agli occhi di tutti.</h3>
        <hr/>
        <p>In base a quelli che sono i tuoi obbiettivi, pianificheremo la strategia di Social Marketing migliore per raggiungerli.
Aumentare la vendita di un prodotto, promuovere un servizio o un evento, fidelizzare i tuoi clienti, far conoscere le novità.</p>
        </div>
    </div>
        <div className="col-6 order-1 p-0">
            <figure>
                <img src={social01} alt=""/>
            </figure>
        </div>
    </section>
    <section className="row">
    <div className="col-6">
        <div className={sectionStyles.text}>
        <h3>Dicci gli obiettivi e al traguardo ti portiamo noi.</h3>
        <hr/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, quam.</p>
        </div>
    </div>
        <div className="col-6 p-0">
            <figure>
                <img src={social01} alt=""/>
            </figure>
        </div>
    </section>
    </div>
    </div>
    </div>
)

export default Section
