import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Showreel from './pages/Showreel'
import Connect from './pages/Connect'
import Services from './pages/Services'
import More from './pages/More'
import ProjectSection from './pages/ProjectSection'

const App = () => {
  return (
    <>
      {/* Global Smooth Scroll Style */}
      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
      ` }} />

      <Navbar />
      
      <div id="home">
        <Hero />
      </div>

      <div id="showreel">
        <Showreel />
      </div>

      <div id="projects">
        <ProjectSection />
      </div>

      <div id="more">
        <More />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="connect">
        <Connect />
      </div>
    </>
  )
}

export default App