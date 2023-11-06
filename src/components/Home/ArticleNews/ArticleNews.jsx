import React, { useState, useEffect } from 'react';

import './ArticleNews.css';

import Button from '#button';
import SectionTitle from '#sectiontitle';
import Articles from '../../../generics/Articles';


const ArticleNews = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
    }, []);

    const getArticles = async () => {
        try {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
            const articleData = await result.json();
            setArticles(articleData.slice(0, 3));
        } catch (error) {
            console.error('Error fetching articles', error);
        }
    };

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
                        articles.map((article) => (
                            <Articles
                                key={ article.id }
                                id={article.id}
                                img={ article.imageUrl }
                                published={article.published}
                                title={ article.title }
                                content={ article.content }
                                category={ article.category }
                            />
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