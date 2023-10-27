import React from 'react'


import './ArticleNewsNews.css'
import ArticleNews from '../../generics/ArticleNews';

import img_digitalisation from '#images/digitalisation.png';
import img_chatGTP from '#images/chat-gtp.png';
import img_cssGuide from '#images/css-guide.png';
import img_fiveS from '#images/news-five-s.png';
import img_endUsers from '#images/news-end-users.png';
import img_newsStockholm from '#images/news-stockholm.png';
import img_businessIntelligence from '#images/news-business-intelligence.png';
import img_newsApple from '#images/news-apple.png';
import img_newsImprove from '#images/news-improve.png';



const ArticleNewsNews = () => {
    const articleNews = [
        {img: img_digitalisation, title: "Business", articleHeader: "How To Use Digitalization  In The Classroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", alt: "smiling lady sitting by a table"},
        {img: img_chatGTP, title: "Business", articleHeader: "How To Implement Chat GTP  In Your Projects", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", alt: "image of chat-gtp"},
        {img: img_cssGuide, title: "Business", articleHeader: "The Guide To Support Modern  CSS Design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", alt: "image of CSS books"},
        {img: img_fiveS, title: "Business", articleHeader: "Why You Need To Implement The Five S", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", alt: "woman taking notes on a notepad"},
        {img: img_endUsers, title: "Business", articleHeader: "Get More Involved With Your End Users", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", alt: "heads and ceiling"},
        {img: img_newsStockholm, title: "Business", articleHeader: "Guided Tour Of Our New Head Office In Stockholm", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", alt: "office and computers"},
        {img: img_businessIntelligence, title: "Business", articleHeader: "Using Business Intelligence To Get Insights Into Our Businesses", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", alt: "laptop with data"},
        {img: img_newsApple, title: "Business", articleHeader: "Apple Has Released New Products. Are They Any Good?", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", alt: "apple products"},
        {img: img_newsImprove, title: "Business", articleHeader: "How To Improve Your Teams And Get A Better Result", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", alt: "cup and a notebook"},
    ];
  return (
    <section className="article-news">
    <div className="container">
        <div className="title-part">
            <div className="section-title">
                <h2>Our News And Articles</h2>
            </div>
        </div>
        <div className="content-news">

            {
                articleNews.map((news, index) => (
                    <ArticleNews key={ index } img={ news.img } title={ news.title }  articleHeader={ news.articleHeader } description={ news.description } alt={ news.alt }/>
                ))
            }
           
        </div>
        <div className="chevron-slider">
            <div className="chevron chevron-left" id="prev">&lt;</div>
            <div className="slider" id="slider">
               
            </div>
            <div className="chevron chevron-right" id="next">&gt;</div>
        </div>
    </div>
</section>
  )
}

export default ArticleNewsNews