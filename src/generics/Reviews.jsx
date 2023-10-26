import React from 'react'

const Reviews = ({ description, img, alt, name, jobTitle }) => {
  return (
    <div className="review">
                    <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <p>{ description }</p>
                    <div className="client">
                        <img src={ img } alt={ alt } loading="lazy" />
                        <div className="title">
                            <h2>{ name }</h2>
                            <p>{ jobTitle }</p>
                        </div>
                    </div>
                </div>
  )
}

export default Reviews