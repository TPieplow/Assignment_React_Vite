import React, { useEffect, useState } from 'react';

import './ArticleNews.css';

import Button from '#button';
import SectionTitle from '#sectiontitle';
import Articles from '../../../generics/Articles';
import { useArticlesContext } from '../../contexts/ArticleContext';


const ArticleNews = () => {
    const { articlesContext, getArticles, clearArticles } = useArticlesContext();
    const [updateToThreeArticles, setUpdateToThreeArticles] = useState(true);

    // Context got a limit variable, which calls a certain number of articles to display
    // getArticles(3) fetches 3 articles instead of the whole array
    // setUpdateToThreeArticles is used to stop further rendering
    useEffect(() => {
        if (articlesContext) {
            getArticles(3)
            setUpdateToThreeArticles(false)
            return () => clearArticles()
        }
    }, [updateToThreeArticles]);

    return (
        <section className="article-news">
            <div className="container">
                <div className="title-part">
                    <SectionTitle title="Article & News" description="Get Every Single Article & News" />
                    <div className="btn-box">
                        <Button type="transparent" text="Browse Articles" url="/news" />
                    </div>
                </div>
                <div className="content-news">
                    {
                        articlesContext.slice(0, 3).map((article) => (
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