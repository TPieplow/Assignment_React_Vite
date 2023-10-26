import React from 'react'

const Button = ({ type, text, url }) => {

    const getButtonClassName = () => {
        switch (type) {
            case 'yellow':
                 return 'btn-yellow';
            case 'dark':
                return 'btn-black';
            case 'transparent':
                return 'btn-transparent';
        }
    }

    return (
        <a className={ getButtonClassName() } href={ url }>
            { text }
            <i className="fa-regular fa-arrow-up-right"></i>
        </a>
    )
}

export default Button