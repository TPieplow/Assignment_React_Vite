import React from 'react';

import './AboutCompany.css';

import Button from '#button';
import img_samantha from '#images/Samantha.png';
import img_penstroke from '#images/about-stroke.svg'
import SectionTitle from '#sectiontitle';

const AboutCompany = () => {
  return (
    <section className="about">
    <div className="container">
        <div className="position-relative">
            <div className="image-box">
                <img className="pen-stroke" src={ img_penstroke } alt="white-pen-stroke" />
                <img src={ img_samantha } alt="Samantha in a blue shirt" loading="lazy" />
                <div className="sam-info">
                    <h3>Samantha Brown, <span className="founder-text">Founder</span></h3>
                    <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit."</p>
                </div>
            </div>
        </div>
        <div className="about-company">
            <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
            </div>
            <div className="btn-box">
                <Button type="dark" text="Learn More" url="/about" />
                <a href="" className="btn-intro"> <i className="fa-thin fa-circle-play"></i>Intro Video</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutCompany