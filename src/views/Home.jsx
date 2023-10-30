import React from 'react';
import Header from '#components/Home/Header/Header';
import OurServices from '#components/Home/OurServices/OurServices';
import Features from '#components/Home/Features/Features';
import AboutCompany from '#components/Home/AboutCompany/AboutCompany';
import BrandsBox from '#components/Home/BrandsBox/BrandsBox';
import WhyChooseUs from '#components/Home/WhyChooseUs/WhyChooseUs';
import ProjectCaseStudies from '#components/Home/ProjectCaseStudies/ProjectCaseStudies';
import OurTeam from '#components/Home/OurTeam/OurTeam';
import Testimonial from '#components/Home/Testimonial/Testimonial';
import ArticleNews from '#components/Home/ArticleNews/ArticleNews';
import NewsLetter from '#components/Home/NewsLetter/NewsLetter';
import Footer from '#components/Home/Footer/Footer';

import '../App.css';



const Home = () => {
  return (

    <div className="wrapper">
      <Header />
      <main>
        <BrandsBox />
        <Features />
        <AboutCompany />
        <OurServices />
        <WhyChooseUs />
        <ProjectCaseStudies />
        <OurTeam />
        <Testimonial />
        <ArticleNews />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  )
};

export default Home