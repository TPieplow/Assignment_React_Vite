import React from 'react'

const Team = ({ img, name, jobTitle }) => {
    return (
        <div className="member">
            <img src={ img } alt="Kristine Palmer - COO" loading="lazy" />
            <div className="member-info">
                <h4>{ name }</h4>
                <p>{ jobTitle }</p>
            </div>
        </div>
    )
}

export default Team