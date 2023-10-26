import React from 'react';
import './BrandsBox.css';

import Brand from '../../generics/Brand';
import paper_logo from '#images/paper-logo.svg';
import dorfus_logo from '#images/dorfus-logo.svg';
import martino_logo from '#images/martino-logo.svg';
import square_logo from '#images/square-logo.svg';
import gobona_logo from '#images/gobona-logo.svg';

const BrandsBox = () => {
    const brands = [
        { img: paper_logo, altText: "logotype paper" },
        { img: dorfus_logo, altText: "logotype dorfus" },
        { img: martino_logo, altText: "logotype martino" },
        { img: square_logo, altText: "logotype square" },
        { img: gobona_logo, altText: "logotype gobona" }
    ];
    return (

        <div className="brands-box container">
            {
                brands.map((brand, index) => (
                    <Brand key={ index } img={ brand.img } altText={brand.altText} />
                ))
            }
        </div>
    );
};

export default BrandsBox;