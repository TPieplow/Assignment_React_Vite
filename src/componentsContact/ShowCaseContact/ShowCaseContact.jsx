import React from 'react'

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
                    <a href="index.html">Home</a>
                    <a href="contact.html">Contact</a>
                    <h1>Let's Connect</h1>
                </div>
            </div>
        </section>
    )
}

export default ShowCaseContact