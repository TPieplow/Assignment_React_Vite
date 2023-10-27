import React from 'react';

import '../App.css';
import HeaderNews from '../componentsNews/HeaderNews/HeaderNews';
import Footer from '../components/Footer/Footer';
import ShowcaseNews from '../componentsNews/ShowcaseNews/ShowcaseNews';
import ArticleNewsNews from '../componentsNews/ArticleNewsNews/ArticleNewsNews';
import NewsLetterNews from '../componentsNews/NewsLetterNews/NewsLetterNews';

const News = () => {
  return (
    <div className="wrapper">

    <HeaderNews />
    <ShowcaseNews />
    <main>
      <ArticleNewsNews />
      <NewsLetterNews />
    </main>
    <Footer />

  </div>
  )
}

export default News