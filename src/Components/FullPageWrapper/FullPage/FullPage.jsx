import React from 'react'
import About from './AboutPart/About'
import Contact from './Contact/Contact'
import Experiences from './Experiences/Experiences'
import Hero from './Hero'
import Navigation from './Navigation'
import Portfolio from './Portfolio/Portfolio'
import Services from './Services/Services'

function FullPage() {
  return (
    <div >
        <div className='header'>
          <Navigation/>
          <Hero/>
        </div>
        <About/>
        <Services/>
        <Portfolio/>
        <Experiences/>
        <Contact/>
    </div>
  )
}

export default FullPage