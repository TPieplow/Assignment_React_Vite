import './Header.css'
import React from 'react'

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