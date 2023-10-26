import React from 'react';
import './Features.css';

import Feature from '../../generics/Feature';
import Button from '#button';
import SectionTitle from '#sectiontitle';

const Features = () => {
    const features = [
        { iconClass: "fa-light fa-handshake", title: "Business Advice", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        { iconClass: "fa-sharp fa-regular fa-lightbulb-exclamation-on", title: "Startup Business", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        { iconClass: "fa-sharp fa-light fa-chart-mixed-up-circle-dollar", title: "Financial Advice", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        { iconClass: "fa-regular fa-cube", title: "Risk Management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
    ];
  return (

    <section className="features-section">
    <div className="borders">
        <div className="container">
            <div className="section-title">
                <SectionTitle title="Features" description="Our Accounting Is Trusted By Thousand Of Companies" />
                <Button type="yellow"  text="Learn More" url="/services/consulting" />
            </div>
            <div className="advice">
                {
                     features.map(( feature, index ) => 
                        <Feature key={ index } iconClass={ feature.iconClass } title={ feature.title } description={ feature.description } />
                     )
                }
            </div>
        </div>
    </div>
</section>
  );
};

export default Features;
