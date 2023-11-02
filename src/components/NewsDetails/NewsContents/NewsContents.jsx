import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NewsContect } from '../../../generics/NewsContect'

import './NewsContents.css'


const NewsContents = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getArticles()
  }, [id])

  const getArticles = async () => {
    if (id !== undefined) {
      try {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
        const articlesData = await result.json();
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching articles', error);
      }
    }
  };

  return (
    <section>
      <div className='container newscontents'>
        <div className='maincontent'>
          {articles ? (
            <NewsContect
              key={articles.id}
              title={articles.title}
              published={articles.published}
              category={articles.category}
              author={articles.author}
              img={articles.imageUrl}
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
            <div className='subtitle'>
              <div>How To Blow Through Capital At An Incredible Rate</div>
              <p>Jan 14, 2020</p>
            </div>
            <div className='subtitle'>
              <div>Design Studios That Everyone Should Know About?</div>
              <p>Jan 14, 2020</p>
            </div>
            <div className='subtitle'>
              <div>How did we get 1M+ visitors in 30 days without anything!</div>
              <p>Jan 14, 2020</p>
            </div>
            <div className='subtitle'>
              <div>Figma On Figma: How We Built Our Website Design System</div>
              <p>Jan 14, 2020</p>
            </div>
          </div>
          <div className='categories'>
            <div>
              <h5 className='titleSidebar'>Categories</h5>
            </div>
            <p><span>Technology </span>- 20 posts</p>
            <p><span>Freelancing</span> - 07 Posts</p>
            <p><span>Writing</span> - 16 Posts</p>
            <p><span>Marketing</span> - 11 Posts</p>
            <p><span>Business</span> - 35 Posts</p>
            <p><span>Education</span> - 14 Posts</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsContents