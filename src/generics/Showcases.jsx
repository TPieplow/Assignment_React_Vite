import React from 'react';
import ShowCaseWhiteStroke from '#images/showcase-stroke.svg';

import { NavLink } from 'react-router-dom';

const Showcases = ({ title, url, urlName }) => {
  return (
    <section className="showcase">
    <div className="sc-white-stroke">
        <img src={ ShowCaseWhiteStroke } alt="detail with white pen strokes" />
    </div>
    <div className="container">
        <div className="content">
            <NavLink className="links" to="/">Home</NavLink>
            <NavLink className="links" to={ url }>{ urlName }</NavLink>
            <h1>{ title }</h1>
        </div>
    </div>
</section>
  )
}

export default Showcases

