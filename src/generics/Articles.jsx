import React from 'react';

import { Link } from 'react-router-dom';
import formatPublishedDate from '../generics/FormatDate'

const Articles = ({ id, url, img, title, content, author, published, category, alt }) => {
  const formattedPublished = formatPublishedDate(published)
  return (
    <Link key={id} to={`/news/${id}`} className="text-wrapper">
      <div className='imgContainer'>
        <img className="articleImg" src={img} alt={alt} loading="lazy" />
        <div className='banner'> {formattedPublished} </div>
      </div>
      <p>{category}</p>
      <h3 >{title}</h3>
      <p>{author}</p>
      <p>{content}</p>
    </Link>
  )
};

export default Articles