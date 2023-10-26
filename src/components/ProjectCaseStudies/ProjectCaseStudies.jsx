import React from 'react'

import './ProjectCaseStudies.css'

import Button from '#button';
import img_manWithNewsPaper from '#images/man_with_a_newspaper.png';
import img_tabletGlasses from '#images/tablet-glasses.png';
import img_notebook from '#images/notebook.png';
import img_laptop from '#images/laptop.png';

const ProjectCaseStudies = () => {
    return (
        <section className="project">
            <div className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let's Look At Our Global Projects</h2>
                </div>
                <div className="project-cases">
                    <a className="articles" href="#">
                        <img src={img_manWithNewsPaper} alt="man_with_a_newspaper" loading="lazy" />
                        <h3>Grow your business</h3>
                        <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="articles" href="#">
                        <img src={img_tabletGlasses} alt="tablet_glasses_marker_watch" loading="lazy" />
                        <h3>Why your clients needs a responsive website</h3>
                        <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="articles" href="#">
                        <img src={img_notebook} alt="notebook_and_cup" loading="lazy" />
                        <h3>Educate your employees to get better results</h3>
                        <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="articles" href="#">
                        <img src={img_laptop} alt="laptop showing data" loading="lazy" />
                        <h3>Business insights is an important piece of your business</h3>
                        <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                </div>
                <div className="btn-box">
                    <Button type="dark" text="All Recent Projects" />
                </div>
            </div>
        </section>
    )
}

export default ProjectCaseStudies