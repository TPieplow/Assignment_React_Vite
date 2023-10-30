import React from 'react'
import { useState, useEffect } from 'react';

import './ArticleNewsNews.css'
import ArticleNews from '../../../generics/ArticleNews';

import ImageCarousel from './ImgCarousel';


const ArticleNewsNews = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
        console.log("running")
    }, [])

    const getArticles = async () => {
        try {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
            const articleData = await result.json();
            setArticles(articleData);
        } catch (error) {
            console.error('Error fetching articles', error)
        }
    }

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
                        articles.map((article) => (
                            <ArticleNews key={ article.id } img={ article.imageUrl } title={ article.title } content={ article.content } category={ article.category } alt={ article.alt } />
                        ))
                    }

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