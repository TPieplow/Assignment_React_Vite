import React from 'react'

import { Link } from 'react-router-dom';

const Button = React.forwardRef(({ type, text, url }, ref) => {

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
        <Link className={ getButtonClassName() } to={ url } ref={ref}>
            { text }
            <i className="fa-regular fa-arrow-up-right"></i>
        </Link>
    )
});

export default Button