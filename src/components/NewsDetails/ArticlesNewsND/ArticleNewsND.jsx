import React, { useState, useEffect, useRef } from 'react';

import '../../Home/ArticleNews/ArticleNews.css';
import './ArticlesNewsND.css';

import Button from '#button';
import SectionTitle from '#sectiontitle';
import Articles from '../../../generics/Articles'


const ArticleNewsND = () => {
    const maxArticles = 9;
    const articlesToShow = 3;

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showLessClicked, setShowLessClicked] = useState(false);
    const [buttonText, setButtonText] = useState('More articles');

    const showMoreRef = useRef(null);

    useEffect(() => {
        getArticles()
    }, []);

    useEffect(() => {
        if (articles.length >= maxArticles) {
            setButtonText('Show Less');
        } else {
            setButtonText('More Articles');
        }
    }, [articles, maxArticles]);

    const getArticles = async () => {
        try {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
            const articleData = await result.json();
            setArticles(articleData.slice(0, articlesToShow));
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

                if (articles.length + articlesToShow <= maxArticles) {
                    const start = articles.length;
                    const end = start + articlesToShow;
                    const nextArticles = articleData.slice(start, end);

                    setArticles(prevArticles => [...prevArticles, ...nextArticles]);
                    if (articles.length + articlesToShow >= maxArticles) {
                        if (showMoreRef.current) {
                            showMoreRef.current.innerText = 'Show Less';
                        }
                    }
                } else {
                    if (showLessClicked) {
                        if (showMoreRef.current) {
                            showMoreRef.current.innerText = 'More Articles';
                        }
                        setArticles(articleData.slice(0, articlesToShow));
                        setShowLessClicked(false);
                    }
                }
            } catch (error) {
                console.error('Error fetching more articles', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleShowLess = () => {
        if (articles.length > articlesToShow) {
            setArticles(articles.slice(0, articlesToShow));
            showMoreRef.current.innerText = 'More Articles';
            setShowLessClicked(true);
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
                                key={article.id}
                                id={article.id}
                                img={article.imageUrl}
                                title={article.title}
                                content={article.content}
                                category={article.category}
                            />
                        ))
                    }
                </div>
                <div className="ring-container" onClick={buttonText === 'Show Less' ? handleShowLess : loadMoreArticles}>
                    <Button ref={showMoreRef} type="dark" text={buttonText} />
                </div>
            </div>
        </section>
    )
}

export default ArticleNewsND
