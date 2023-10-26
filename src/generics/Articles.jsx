import React from 'react'
import { Link } from 'react-router-dom';

const Articles = ({ img, alt, description, title, articleText }) => {
    return (
        <Link to="/articles" className="text-wrapper">
            <img src={ img } alt={ alt } loading="lazy" />
            <p>{ description }</p>
            <h3>{ title }</h3>
            <p>{ articleText } </p>
        </Link>
    );
};

export default Articles;