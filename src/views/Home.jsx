import React from 'react';
import Header from '../components/Header/Header';
import OurServices from '../components/OurServices/OurServices';
import Features from '../components/Features/Features';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import BrandsBox from '../components/BrandsBox/BrandsBox';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import ProjectCaseStudies from '../components/ProjectCaseStudies/ProjectCaseStudies';
import OurTeam from '../components/OurTeam/OurTeam';
import Testimonial from '../components/Testimonial/Testimonial';
import ArticleNews from '../components/ArticleNews/ArticleNews';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Footer from '../components/Footer/Footer';


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