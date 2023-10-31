import React from 'react';

import './ContactInformation.css';
import ContactInfo from '../../../generics/ContactInfo';

const ContactInformation = () => {
    const contactBoxes = [
        { iconClass: "fa-sharp fa-solid fa-circle-location-arrow", title: "Visit Us", desciption: "Sveavägen 31", secondDescription: "111 34 Stockholm" },
        { iconClass: "fa-solid fa-circle-phone", title: "Call Us", desciption: "+46 (8) 121 470 50", secondDescription: "+46 (8) 121 470 51" },
        { iconClass: "fa-sharp fa-solid fa-circle-envelope", title: "Email Us", desciption: "info@crito.com", secondDescription: "support@crito.com" },
    ];

    return (
        <section className="contact-information">
            <div className="container">
                {
                    contactBoxes.map((contactBox, index) =>
                        <ContactInfo
                            key={index}
                            iconClass={contactBox.iconClass}
                            title={contactBox.title}
                            desciption={contactBox.desciption}
                            secondDescription={contactBox.secondDescription}
                        />
                    )
                }
            </div>
        </section>
    )
}

export default ContactInformation