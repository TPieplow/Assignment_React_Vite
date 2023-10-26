import React from 'react'

const ServiceBox = ({ title, description, url }) => {
    return (
        <div href="#" className="box-wrapper">
            <div className="box box-1">
                <h3>{ title }</h3>
                <p>{ description }</p>
                <div className="arrow-wrapper">
                    <a href={ url }><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ServiceBox