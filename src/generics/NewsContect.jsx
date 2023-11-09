import React from 'react';
import formatPublishedDate from './FormatDate';

export const NewsContect = ({ url, img, title, content, author, published, category, alt, id }) => {
    const formattedPublished = formatPublishedDate(published)
    return (
        <div>
            <h3 className='title'> {title}</h3>
            <div className='articleInfo'>
                <span><i className="fa-solid fa-circle"></i></span>
                <span>{category}</span>
                <span><i className="fa-solid fa-circle"></i></span>
                <span>{author} </span>
            </div>
            <div className='imgContainer'>
                <div className="banner"> {formattedPublished} </div>
                <img className='theImage' src={img} alt="" />
            </div>
        </div>
    )
}
