import React from 'react'

export const NewsContect = ({ url, img, title, content, author, published, category, alt }) => {
    return (
        <div>
            <h3 className='title'> {title}</h3>
            <div className='articleInfo'>
                <span>{published}</span>
                <span><i class="fa-solid fa-circle"></i></span>
                <span>{category}</span>
                <span><i class="fa-solid fa-circle"></i></span>
                <span>{author} </span>
            </div>
            <div className='imgContainer'>
                <img className='theImage' style={{ width: '760px', height: 'auto' }} src={img} alt="" />
            </div>
        </div>
    )
}
