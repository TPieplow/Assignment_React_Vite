import React from 'react'
import ShowCaseWhiteStroke from '#images/showcase-stroke.svg';

import { Link } from 'react-router-dom';

const Showcases = ({ title, url }) => {
  return (
    <section className="showcase">
    <div className="sc-white-stroke">
        <img src={ ShowCaseWhiteStroke } alt="detail with white pen strokes" />
    </div>
    <div className="container">
        <div className="content">
            <Link to="/">Home</Link>
            <Link to="/news">{ url }</Link>
            <h1>{ title }</h1>
        </div>
    </div>
</section>
  )
}

export default Showcases

