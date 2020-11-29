import React from 'react'
import { Link } from 'gatsby'


const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Recanto da Carmen Lúcia</h1>
            </header>
            <div className="content">
                <ul className="actions">
                    <li><Link to="/landing" className="button next">Nosso Funcionamento</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
