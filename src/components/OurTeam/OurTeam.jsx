import React from 'react';

import './OurTeam.css';


import Button from '#button';
import SectionTitle from '#sectiontitle';

import img_kristinePalmer from '#images/kristine_palmer.png';
import img_markAubri from '#images/mark_aubri.png';
import img_kimberlyHansen from '#images/kimberly_hansen.png';
import img_justinWilloman from '#images/justin-willoman.png';


const OurTeam = () => {
    return (
        <section className="our-team">
            <div className="container">
                <div className="title-wrapper">
                    <SectionTitle title="Meet Our Team" description="Experience Team Members" />
                    <Button type="yellow" text="Browse Team" url="/team" />
                </div>
                <div className="team">
                    <div className="member member1">
                        <img src={img_kristinePalmer} alt="Kristine Palmer - COO" loading="lazy" />
                        <div className="member-info">
                            <h4>Kristine Palmer</h4>
                            <p>Chef Operation Officer</p>
                        </div>
                    </div>
                    <div className="member member2">
                        <img src={img_markAubri} alt="Mark Aubri - Senior Consultant" loading="lazy" />
                        <div className="member-info">
                            <h4>Mark Aubri</h4>
                            <p>Senior Consultant</p>
                        </div>
                    </div>
                    <div className="member member3">
                        <img src={img_kimberlyHansen} alt="Kimberly Hansen - Senior Consultant" loading="lazy" />
                        <div className="member-info">
                            <h4>Kimberly Hasen</h4>
                            <p>Senior Consultant</p>
                        </div>
                    </div>
                    <div className="member member4">
                        <img src={img_justinWilloman} alt="Justin Willowman - Senior Tech Consultant" loading="lazy" />
                        <div className="member-info">
                            <h4>Justin Willowman</h4>
                            <p>Senior Tech Consultant</p>
                        </div>
                    </div>
                </div>
                <div className="ring-container">
                    <div className="ring"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam