import React from 'react';

import './ArticleNews.css';

import Button from '#button';
import SectionTitle from '#sectiontitle'

import img_digitalisation from '#images/digitalisation.png';
import img_chatGTP from '#images/chat-gtp.png';
import img_cssGuice from '#images/css-guide.png';
import Articles from '../../../generics/Articles';

const ArticleNews = () => {
    const articles = [
        { img: img_digitalisation, alt: "smiling lady sitting by a table", description: "Business", title: "How To Use Digitalization In The Classroom", articleText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." },
        { img: img_chatGTP, alt: "image of chat-gtp", description: "Business", title: "How To Implement Chat GTP In Your Projects", articleText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." },
        { img: img_cssGuice, alt: "image of css books", description: "Business", title: "The Guide To Support Modern CSS Design", articleText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." },
    ];
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

                    {
                        articles.map((article, index) => (
                            <Articles key={ index } img={ article.img } alt={ article.alt } description={ article.description } title={ article.title } articleText={ article.articleText } />
                        ))
                    }

                </div>
                <div className="ring-container">
                    <div className="ring ring-1"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                </div>
            </div>
        </section>
    )
}

export default ArticleNews