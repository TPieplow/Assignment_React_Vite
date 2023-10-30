import React from 'react';
import './OurTeam.css';

import Button from '#button';
import SectionTitle from '#sectiontitle';
import Team from '../../../generics/Team';

import img_kristinePalmer from '#images/kristine_palmer.png';
import img_markAubri from '#images/mark_aubri.png';
import img_kimberlyHansen from '#images/kimberly_hansen.png';
import img_justinWilloman from '#images/justin-willoman.png';


const OurTeam = () => {
    const team = [
        { img: img_kristinePalmer, name: "Kristine Palmer", jobTitle: "Chef Operation Officer" },
        { img: img_markAubri, name: "Mark Aubri", jobTitle: "Senior Consultant" },
        { img: img_kimberlyHansen, name: "Kimberly Hansen", jobTitle: "Senior Consultant" },
        { img: img_justinWilloman, name: "Justin Willowman", jobTitle: "Senior Tech Consultant" },
    ];
    return (
        <section className="our-team">
            <div className="container">
                <div className="title-wrapper">
                    <SectionTitle title="Meet Our Team" description="Experience Team Members" />
                    <Button type="yellow" text="Browse Team" url="/team" />
                </div>
                <div className="team">

                    {
                        team.map((teamMember, index) => (
                            <Team key={ index } img={ teamMember.img } name={ teamMember.name } jobTitle={ teamMember.jobTitle } />
                        )) 
                    }
                   
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