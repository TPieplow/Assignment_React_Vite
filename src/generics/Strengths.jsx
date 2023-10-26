import React from 'react'

const Strengths = ({ iconClass, title, description }) => {
    return (
        <div className="process-wrapper">
            <div className="icon-wrapper">
                <i className={ iconClass }></i>
            </div>
            <div className="text-wrapper">
                <h3>{ title }</h3>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default Strengths