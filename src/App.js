import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import gsap from 'gsap'
import Header from './components/Header'
import './styles/App.scss'

// pages
import Home from './pages/home'
import CaseStudies from './pages/caseStudies'
import Services from './pages/services'
import About from './pages/about'
import Approach from './pages/approach'

function App() {
  useEffect(() => {
    // prevent flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } })

    // set viewport unit on mobile
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/case-studies' component={CaseStudies} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/about-us' component={About} />
      <Route exact path='/approach' component={Approach} />
    </Router>
  )
}

export default App
