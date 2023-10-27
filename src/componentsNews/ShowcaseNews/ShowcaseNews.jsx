import React from 'react'

import { Link } from 'react-router-dom'

import img_whiteStroke from '#images/showcase-stroke.svg'

const ShowcaseNews = () => {
    return (
        <section className="showcase">
            <div className="sc-white-stroke">
                <img src={ img_whiteStroke } alt="detail with white pen strokes" />
            </div>
            <div className="container">
                <div className="content">
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                    <h1>News & Articles</h1>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseNews