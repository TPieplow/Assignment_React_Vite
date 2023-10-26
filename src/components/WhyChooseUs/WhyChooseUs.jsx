import React from 'react';
import './WhyChooseUs.css';

import img_talkingwomen from '#images/two_women-talking.png'
import SectionTitle from '#sectiontitle';


const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
<div className="gray-div"></div>
<div className="container">
    <div className="choose-us">
        <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
        <div className="strengths">
            <div className="process-wrapper">
                <div className="icon-wrapper">
                    <i className="fa-light fa-thumbs-up"></i>
                </div>
                <div className="text-wrapper">
                    <h3>Process Excellence</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="process-wrapper">
                <div className="icon-wrapper">
                    <i className="fa-duotone fa-chess"></i>
                </div>
                <div className="text-wrapper">
                    <h3>Strategic Planning</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="process-wrapper">
                <div className="icon-wrapper">
                    <i className="fa-light fa-pen-nib"></i>
                </div>
                <div className="text-wrapper">
                    <h3>Experience Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="process-wrapper">
                <div className="icon-wrapper">
                    <i className="fa-light fa-head-side-gear"></i>
                </div>
                <div className="text-wrapper">
                    <h3>Artificial Intelligence</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="why-image">
        <img src={ img_talkingwomen } alt="Two women talking at a desk" loading="lazy" />
    </div>
    
</div>
</section>
  )
}

export default WhyChooseUs