import React from 'react';

import './ArticleNews.css';

import Button from '#button';
import SectionTitle from '#sectiontitle'

import img_digitalisation from '#images/digitalisation.png';
import img_chatGTP from '#images/chat-gtp.png';
import img_cssGuice from '#images/css-guide.png';

const ArticleNews = () => {
  return (
    <section className="article-news">
<div className="container">
    <div className="title-part">
        <SectionTitle title="Article & News" description="Get Every Single Article & News" />
        <div className="btn-box">
            <Button type="transparent" text="Browse Articles" url="/articles" />
        </div>
    </div>
    <div className="content-news">
        <a href="#" className="text-wrapper">
            <img src={ img_digitalisation } alt="smiling lady sitting by a table" loading="lazy" />
            <p>Business</p>
            <h3>How To Use Digitalization In The Classroom</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </a>
        <a href="#" className="text-wrapper">
            <img src={ img_chatGTP } alt="image of chat-gtp" loading="lazy" />
            <p>Business</p>
            <h3>How To Implement Chat GTP In Your Projects</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </a>
        <a href="#" className="text-wrapper">
            <img src={ img_cssGuice } alt="image of css books" loading="lazy" />
            <p>Business</p>
            <h3>The Guide To Support Modern CSS Design</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </a>
    </div>
    <div className="ring-container">
        <div className="ring ring-1"><a href=""></a></div>
        <div className="ring"><a href="#"></a></div>
        <div className="ring"><a href="#"></a></div>
        <div className="ring"><a href="#"></a></div>
        <div className="ring"><a href="#"></a></div>
    </div>
</div>
</section>
  )
}

export default ArticleNews