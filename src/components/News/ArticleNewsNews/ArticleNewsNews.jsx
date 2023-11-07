import React from 'react';
import { useState, useEffect } from 'react';

import './ArticleNewsNews.css'
import ArticleNews from '../../../generics/ArticleNews';
import ImageCarousel from './ImgCarousel';


const ArticleNewsNews = () => {
    // const { articles, clearArticles } = useArticles()
    // const {id} = useParams()
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()

        // return () => clearArticles()
    }, []);

    const getArticles = async () => {
        try {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');

            if (result.ok) {
                const articleData = await result.json();
                setArticles(articleData);
            } else {
                console.error('Error: Unexpected status code -', result.status)
            }
        } catch (error) {
            console.error('Error fetching articles', error);
        }
    };

    return (
        <section className="article-news">
            <div className="container">
                <div className="title-part">
                    <div className="section-title">
                        <h2>Our News And Articles</h2>
                    </div>
                </div>
                <div className="content-news">
                    {articles ? (
                        articles.map(article => (
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
                    ) : (
                        <p>No articles available</p>
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