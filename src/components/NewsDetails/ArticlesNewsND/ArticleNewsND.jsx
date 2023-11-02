import React, { useState, useEffect } from 'react';

import '../../Home/ArticleNews/ArticleNews.css';
import './ArticlesNewsND.css';

import Button from '#button';
import SectionTitle from '#sectiontitle';
import Articles from '../../../generics/Articles'


const ArticleNewsND = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const loadMoreArticles = async () => {
        if (!loading) {
            setLoading(true);
            try {
                const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
                const articleData = await result.json();

                const articlesToShow = 3;

                const start = articles.length;
                const end = start + articlesToShow;

                const nextArticles = articleData.slice(start, end);
                
                setArticles(prevArticles => [...prevArticles, ...nextArticles]);
            } catch (error) {
                console.error('Error fetching more articles', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <section className="article-news background">
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
                                title={ article.title }
                                content={ article.content }
                                category={ article.category }
                            />
                        ))
                    }
                </div>
                <div className="ring-container" onClick={loadMoreArticles}>
                    <Button type="dark" text="More Articles" />
                </div>
            </div>
        </section>
    )
}

export default ArticleNewsND
