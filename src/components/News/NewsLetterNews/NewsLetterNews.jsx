import React from 'react';

import img_whiteStroke from '#images/squiggly-newsletter.svg';

const NewsLetterNews = () => {
    return (
        <section className="newsletter">
            <img className="squiggly-newsletter" src={ img_whiteStroke } alt="for lines for newsletter section" />
            <div className="container">
                <h2>News Updates By Signup</h2>
                <form>
                    <input type="text" placeholder="username@domain.com" />
                    <button className="btn-yellow">Subscribe<i className="fa-solid fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section>
    )
}

export default NewsLetterNews