import React from 'react';

import './OurServices.css';

import ServiceBox from '../../../generics/ServiceBox';
import SectionTitle from '#sectiontitle';
import Button from '#button';
import ourServiceWhiteStroke from '#images/our-service-white-stroke.svg';


const text = (
    <>
        We Provide The Best <br /> Service For Consulting
    </>
);
const OurServices = () => {
    const services = [
        { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/businessadvice" },
        { title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/startup" },
        { title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/financialadvice" },
        { title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/riskmanagement" }
    ];
    return (

        <section className="our-services">
            <div className="container">
                <SectionTitle title="Our Services" description={text} />
                <div className="box-container">

                    {
                        services.map((service, index) => (
                            <ServiceBox key={index} title={service.title} description={service.description} url={service.url} />
                        ))
                    }

                </div>
                <div className="btn-box">
                    <Button type="dark" text="Browse Services" url="/services" />
                </div>
                <div className="white-thingy">
                    <img src={ourServiceWhiteStroke} alt="white pen stroke for our service page" />
                </div>
            </div>
        </section>
    )
};

export default OurServices;