import React from 'react'
import NavBar from './NavBar'
import VideoSlider from './VideoSlider'
import About from './About'
import Services from './Services'
import Contact from './Contact'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <VideoSlider/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default HomePage