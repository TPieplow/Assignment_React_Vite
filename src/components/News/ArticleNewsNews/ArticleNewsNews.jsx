import React from 'react';
import { useEffect } from 'react';

import './ArticleNewsNews.css'
import ArticleNews from '../../../generics/ArticleNews';
import ImageCarousel from './ImgCarousel';
import { useArticlesContext } from '../../contexts/ArticleContext';



const ArticleNewsNews = () => {
    const { articlesContext, getArticles, clearArticles } = useArticlesContext()

    useEffect(() => {
        getArticles()
        return () => clearArticles()
    }, []);

    return (
        <section className="article-news">
            <div className="container">
                <div className="title-part">
                    <div className="section-title">
                        <h2>Our News And Articles</h2>
                    </div>
                </div>
                <div className="content-news">
                    {articlesContext ? (
                        articlesContext.map(article => (
                            <ArticleNews
                                key={article.id}
                                id={article.id}
                                img={article.imageUrl}
                                published={article.published}
                                title={article.title}
                                content={article.content}
                                category={article.category}
                            />
                        ))
                    )
                        :
                        (
                            <p>No available articles</p>
                        )}
                </div>
                <div className="chevron-slider">
                    <div className="chevron chevron-left" id="prev">&lt;</div>
                    <div className="slider" id="slider">
                        <ImageCarousel />
                    </div>
                    <div className="chevron chevron-right" id="next">&gt;</div>
                </div>
            </div>
        </section>
    )
}

export default ArticleNewsNews