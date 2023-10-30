import React from 'react'
import './Header.css'


import Navigation from './Navigation/Navigation'
import ShowcaseSection from './Showcase/Showcase'


const Header = () => {
  return (
    <header>

      <Navigation />
      <ShowcaseSection />

    </header>
  )
}

export default Header