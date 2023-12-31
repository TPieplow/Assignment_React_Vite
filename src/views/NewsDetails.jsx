import React from 'react'

import HeaderND from '../components/NewsDetails/HeaderND'
import Footer from '../components/Home/Footer/Footer'
import ShowCaseND from '../components/NewsDetails/ShowCaseND/ShowCaseND'
import NewsContents from '../components/NewsDetails/NewsContents/NewsContents'
import ArticleNewsND from '../components/NewsDetails/ArticlesNewsND/ArticleNewsND'

const NewsDetails = () => {
  return (
    <div className="wrapper">
    <HeaderND />
    <ShowCaseND />
    <main>
    <NewsContents />
    <ArticleNewsND />
    </main>
    <Footer />

  </div>
  )
}

export default NewsDetails