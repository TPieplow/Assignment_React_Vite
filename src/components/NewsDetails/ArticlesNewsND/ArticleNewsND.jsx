import React, { useState, useEffect } from 'react';

import '../../Home/ArticleNews/ArticleNews.css';
import './ArticlesNewsND.css';
import Button from '#button';
import SectionTitle from '#sectiontitle';
import Articles from '../../../generics/Articles'
import { useArticlesContext } from '../../contexts/ArticleContext';


const ArticleNewsND = () => {
    const { articlesContext, getArticles, clearArticles } = useArticlesContext();
    const maxArticles = 9;
    const articlesToShow = 3;

    const [loading, setLoading] = useState(false);
    const [showLessClicked, setShowLessClicked] = useState(false);
    const [buttonText, setButtonText] = useState('More Articles');
    const [visibleArticles, setVisibleArticles] = useState([]);

    useEffect(() => {
        getArticles();
        return () => clearArticles();
    }, []);

    useEffect(() => {
        if (articlesContext) {
            setVisibleArticles(articlesContext.slice(0, articlesToShow));
            if (articlesContext.length <= maxArticles) {
                setButtonText('More Articles');
            }
        }
    }, [articlesContext]);

    const loadMoreArticles = () => {
        setLoading(true);
        const remainingArticles = articlesContext.slice(visibleArticles.length, maxArticles);
        const incomingArticles = remainingArticles.slice(0, articlesToShow);
        setVisibleArticles(prevVisibleArticles => [...prevVisibleArticles, ...incomingArticles]);

        if (visibleArticles.length + articlesToShow >= maxArticles) {
            setButtonText('Show Less');
        }
        setLoading(false);
    };

    const handleShowLess = () => {
        setVisibleArticles(articlesContext.slice(0, articlesToShow));
        setButtonText('More Articles');
        setShowLessClicked(true);
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
                    {visibleArticles ? (
                        visibleArticles.map((article) => (
                            <Articles
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
                            <p>Loading article</p>
                        )}
                </div>
                <div className="ring-container" onClick={buttonText === 'Show Less' ? handleShowLess : loadMoreArticles}>
                    <Button type="dark" text={buttonText} />
                </div>
            </div>
        </section>
    )

};

export default ArticleNewsND;