import React from 'react'
import Footer from '#components/Home/Footer/Footer';

import './NotFound.css';
import cat from '#images/catpagenotfound.png';
import Button from '#button';

const NotFound = () => {
  return (
    <div className="wrapper">
      {/* <h1>Page not found</h1> */}
      <main>
        <Button type="dark" url="/"/>
        <img src={ cat } alt="A cat" />
      </main>
      
      <Footer />
      
    </div>


  )
}

export default NotFound