import React from 'react';

import { Link } from 'react-router-dom';

const Articles = ({ url, img, title, content, author, published, category, alt }) => {
  return (
    <Link to="/newsDetails" className="text-wrapper">
      <img className="articleImg" src={ img } alt={ alt } loading="lazy" />
      <p>{ category }</p>
      <h3 >{ title }</h3>
      <p>{ author }</p>
      <p>{ content }</p>
    </Link>
  )
}

export default Articles