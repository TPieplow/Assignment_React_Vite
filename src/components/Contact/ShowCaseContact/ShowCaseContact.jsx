import React from 'react'

import { Link } from 'react-router-dom';

import './ShowCaseContact.css'
import ShowCaseWhiteStroke from '#images/showcase-stroke.svg';

const ShowCaseContact = () => {
    return (
        <section className="showcase">
            <div className="sc-white-stroke">
                <img src={ ShowCaseWhiteStroke } alt="detail with white pen strokes" />
            </div>
            <div className="container">
                <div className="content">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <h1>Let's Connect</h1>
                </div>
            </div>
        </section>
    )
}

export default ShowCaseContact