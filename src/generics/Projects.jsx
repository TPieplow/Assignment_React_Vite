import React from 'react'

import { Link } from 'react-router-dom'

const Projects = ({ url, img, title, description, iconClass }) => {
    return (
        <Link to={ url } className="articles">
            <img src={ img } alt="man_with_a_newspaper" loading="lazy" />
            <h3>{ title }</h3>
            <div className="read-more">{ description }<i className={ iconClass }></i></div>
        </Link>
    )
}

export default Projects