import React from 'react'
import Footer from '#components/Home/Footer/Footer';
import './NotFound.css';

import Button from '#button';

const NotFound = () => {
  return (
    <div className="wrapper">
      <main className='mainNotFound'>
        <div className='background'>
          <h2></h2>
          <Button className="btnNotFound" type="not-found" url="/" text="Go back"/>
        </div>
      </main>
      <Footer />
    </div>


  )
}

export default NotFound