import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { NewsContect } from '../../../generics/NewsContect'

import './NewsContents.css'
import { useArticlesContext } from '../../contexts/ArticleContext';
import Category from '../../../generics/Category';
import CategoryLinks from '../../../generics/CategoryLinks';



const NewsContents = () => {
  const { articleContext, getArticle } = useArticlesContext();
  const { articlesContext, getArticles, clearArticles } = useArticlesContext();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getArticle(id)
    }
  }, [id])

  useEffect(() => {
    if (articlesContext) {
      getArticles();
      return () => clearArticles();
    }
  }, [articleContext])

  return (
    <section>
      <div className='container newscontents'>
        <div className='maincontent'>
          {articleContext ? (
            <NewsContect
              key={articleContext.id}
              title={articleContext.title}
              published={articleContext.published}
              category={articleContext.category}
              author={articleContext.author}
              img={articleContext.imageUrl}
            />
          ) : (
            <p>No articles found</p>
          )
          }
          <div className='articleContent'>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            </p>
            <p>
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
            </p>
            <p>
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
          </div>
          <div className='quotation'>
            <i className="fa-sharp fa-solid fa-quote-right"></i>
            <div className='quoteText'>
              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
            </div>
          </div>
          <p className='articleContent'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <div className='categorys'>
            <Link to="/news" className='category'>Digitalization</Link>
            <Link to="/news" className='category'>School</Link>
            <Link to="/news" className='category'>IT</Link>
            <Link to="/news" className='category'>Design</Link>
            <Link to="/news" className='category'>Work</Link>
            <Link to="/news" className='category'>Tech</Link>
          </div>
        </div>
        <div className='searchBar'>
          <div className='searchContainer'>
            <input type="search" placeholder='Type to search...' />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='recentPosts'>
            <div className='titleSidebar'>
              <h5>Recent Posts</h5>
            </div>
            {
              articlesContext.slice(0, 4).map((article) => (
                <Category
                  key={article.id}
                  title={article.title}
                  published={article.published}
                />
              ))
            }
          </div>
          <div className='categories'>
            <div>
              <h5 className='titleSidebar'>Categories</h5>
            </div>
            {
              articlesContext.slice(0, 4).map((article) => (
                <CategoryLinks
                  key={article.id}
                  category={article.category}

                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsContents