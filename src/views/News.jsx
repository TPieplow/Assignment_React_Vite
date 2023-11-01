import React from 'react';

import '../App.css';
import HeaderNews from '#components/News/HeaderNews/HeaderNews';
import Footer from '#components/Home/Footer/Footer';
import ShowcaseNews from '#components/News/ShowcaseNews/ShowcaseNews';
import ArticleNewsNews from '#components/News/ArticleNewsNews/ArticleNewsNews';
import NewsLetterNews from '#components/News/NewsLetterNews/NewsLetterNews';

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