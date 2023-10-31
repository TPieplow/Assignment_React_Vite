import React from 'react';

import './ShowCaseContact.css';
import Showcases from '../../../generics/Showcases';

const ShowCaseContact = () => {
    const showcases = [
        { title: "Contact us", url: "/contact", urlName: "Contact" }
    ];
    return (
        showcases.map((showcase, index) => (
            <Showcases
                key={ index }
                title={ showcase.title }
                url={ showcase.url }
                urlName={ showcase.urlName }
            />
        ))
    )
}

export default ShowCaseContact
