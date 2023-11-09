import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ title, published, id }) => {
    const formattedPublished = new Date(published).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return (
        <Link key={id} to={`/news/${id}`} className='subtitle'>
            <div>{ title }</div>
            <p>{ formattedPublished }</p>
        </Link>
    )
}

export default Category