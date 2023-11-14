import React from 'react'
import { Link } from 'react-router-dom'

const CategoryLinks = ({ category, id }) => {
  const hardCodedPosts = [
    {category: 'Företag', posts: '20'},
    {category: 'IT', posts: '07'},
    {category: 'Utbildning', posts: '16'},
    {category: 'Företag', posts: '11'},
  ];

  const categoryInfo = hardCodedPosts.find((item) => item.category === category);

  return (
    <div>

      {
        <Link key={id} to="/pageNotFound" className='category'>
          {category} <span className='posts'>{categoryInfo ? `- ${categoryInfo.posts} Posts` : ''}</span>
        </Link>
      }
    </div>

  )
}

export default CategoryLinks