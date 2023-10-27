import React from 'react';

import { Link } from 'react-router-dom';

const FooterLinks = ({ title, links }) => (
    <div className="link-wrapper">
        <h3>{title}</h3>
        {
        links.map((link, index) => (
            <Link to={ link.url } key={ index }>
                { link.text }
            </Link>
        ))}
    </div>
);

export default FooterLinks