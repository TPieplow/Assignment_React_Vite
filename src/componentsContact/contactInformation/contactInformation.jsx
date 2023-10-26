import React from 'react';

import './contactInformation.css';

const contactInformation = () => {
    return (
        <section className="contact-information">
            <div className="container">
                <div className="information">
                    <div className="icon">
                        <i className="fa-sharp fa-solid fa-circle-location-arrow"></i>
                    </div>
                    <div className="info-text">
                        <h3>Visit Us</h3>
                        <p>Sveavägen 31</p>
                        <p>111 34 Stockholm</p>
                    </div>
                </div>
                <div className="information">
                    <div className="icon">
                        <i className="fa-solid fa-circle-phone"></i>
                    </div>
                    <div className="info-text">
                        <h3>Call Us</h3>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                </div>
                <div className="information">
                    <div className="icon">
                        <i className="fa-sharp fa-solid fa-circle-envelope"></i>
                    </div>
                    <div className="info-text">
                        <h3>Email Us</h3>
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contactInformation