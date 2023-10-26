import React from 'react';

const Brand = ({ img, altText }) => {
    return (
        <div className="brand-item top-right">
            <img src={img} alt={altText} />
        </div>
    );
};

export default Brand;