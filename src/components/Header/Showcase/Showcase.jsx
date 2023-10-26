import React from 'react';

import './Showcase.css';

import showcase_stroke from '#images/showcase-stroke.svg';
import man_with_tablet from '#images/man_with_tablet.svg';

import Button from '#button';

const ShowcaseSection = () => {
    return (
        <section className="showcase">
            <div className="sc-white-stroke">
                <img src={showcase_stroke} alt="detail with white pen strokes" />
            </div>
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes</p>
                    <div className="button-links">
                        <Button type="yellow" text="Get Consulting" url="/services/get-consulting"/>
                        <Button type="transparent"  text="Learn More" url="/services/consulting" />
                    </div>
                </div>
                <img src={ man_with_tablet } alt="image of a man in a suit with a tablet" />
            </div>
        </section>
    )
}

export default ShowcaseSection