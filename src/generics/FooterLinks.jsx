import React from 'react';

const FooterLinks = ({ title, links }) => (
    <div className="link-wrapper">
        <h3>{title}</h3>
        {links.map((link, index) => (
            <a href={link.url} key={index}>
                {link.text}
            </a>
        ))}
    </div>
);

export default FooterLinks