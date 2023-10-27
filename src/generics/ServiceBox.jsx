import React from 'react'

import { Link } from 'react-router-dom'

const ServiceBox = ({ title, description, url }) => {
    return (
        <div className="box-wrapper">
            <div className="box box-1">
                <h3>{ title }</h3>
                <p>{ description }</p>
                <div className="arrow-wrapper">
                    <Link to={ url }><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceBox