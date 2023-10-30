import React from 'react';
import './WhyChooseUs.css';

import img_talkingwomen from '#images/two_women-talking.png'
import SectionTitle from '#sectiontitle';
import Strengths from '../../../generics/strengths';


const WhyChooseUs = () => {
    const strenghts = [
        { iconClass: "fa-light fa-thumbs-up", title: "Process Excellence", description: "Lorem ipsum dolor sit amet consectetur." },
        { iconClass: "fa-duotone fa-chess", title: "Strategic Planning", description: "Lorem ipsum dolor sit amet consectetur." },
        { iconClass: "fa-light fa-pen-nib", title: "Experience Design", description: "Lorem ipsum dolor sit amet consectetur." },
        { iconClass: "fa-light fa-head-side-gear", title: "Artificial Intelligence", description: "Lorem ipsum dolor sit amet consectetur." },
    ];

  return (
    <section className="why-choose-us">
<div className="gray-div"></div>
<div className="container">
    <div className="choose-us">
        <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
        <div className="strengths">

        {
            strenghts.map((strenght, index) =>
            <Strengths key={ index } iconClass={ strenght.iconClass } title={ strenght.title } description={ strenght.description } />)
        }
        
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