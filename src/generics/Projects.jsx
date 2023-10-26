import React from 'react'

const Projects = ({ img, title, description, iconClass }) => {
    return (
        <a className="articles" href="#">
            <img src={ img } alt="man_with_a_newspaper" loading="lazy" />
            <h3>{ title }</h3>
            <div className="read-more">{ description }<i className={ iconClass }></i></div>
        </a>
    )
}

export default Projects