import React from 'react'

import './ProjectCaseStudies.css'

import Button from '#button';
import img_manWithNewsPaper from '#images/man_with_a_newspaper.png';
import img_tabletGlasses from '#images/tablet-glasses.png';
import img_notebook from '#images/notebook.png';
import img_laptop from '#images/laptop.png';
import Projects from '../../../generics/Projects';

const ProjectCaseStudies = () => {
    const projects = [
        { img: img_manWithNewsPaper, url: "/articles", title: "Grow Your Business", description: "Read More", iconClass: "fa-regular fa-arrow-up-right" },
        { img: img_tabletGlasses, url: "/articles", title: "Why Your Clients Needs A Responsive Website", description: "Read More", iconClass: "fa-regular fa-arrow-up-right" },
        { img: img_notebook, url: "/articles", title: "Educate Your Employees To Get Better Results", description: "Read More", iconClass: "fa-regular fa-arrow-up-right" },
        { img: img_laptop, url: "/articles", title: "Business Insights Is A Important Piece Of Your Business", description: "Read More", iconClass: "fa-regular fa-arrow-up-right" },
    ];
    return (
        <section className="project">
            <div className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let's Look At Our Global Projects</h2>
                </div>
                <div className="project-cases">
                    {
                        projects.map((project, index) => (
                            <Projects key={index} img={project.img} url={project.url} title={project.title} description={project.description} iconClass={project.iconClass} />
                        ))
                    }

                </div>
                <div className="btn-box">
                    <Button type="dark" text="All Recent Projects" url="/projects" />
                </div>
            </div>
        </section>
    )
}

export default ProjectCaseStudies