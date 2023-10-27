import React from 'react';

import './NewsLetter.css';
import Button from '#button';

import img_squigglyNewsletter from '#images/squiggly-newsletter.svg';

const NewsLetter = () => {
  return (
    <section className="newsletter">
    <img className="squiggly-newsletter" src={ img_squigglyNewsletter } alt="for lines for newsletter section" />
    <div className="container">
        <h2>News Updates By Signup</h2>
        <form>
            <input type="text" placeholder="username@domain.com" />
            <Button type="yellow" text="Subscribe" url="/" />
        </form>
    </div>
</section>
  )
}

export default NewsLetter