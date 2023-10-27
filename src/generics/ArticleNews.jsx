import React from 'react';

import { Link } from 'react-router-dom';

const ArticleNews = ({ url, img, title, articleHeader, description, alt }) => {
  return (
    <Link to={url} className="text-wrapper">
                <img src={ img } alt={ alt } loading="lazy" />
                <p>{ title }</p>
                <h3>{ articleHeader }</h3>
                <p>{ description }</p>
            </Link>
  )
}

export default ArticleNews