import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import gsap from 'gsap'
import './styles/App.scss'

// pages
import Home from './pages/home'
import CaseStudies from './pages/caseStudies'
import Services from './pages/services'
import About from './pages/about'
import Approach from './pages/approach'

// components
import Navigation from './components/Navigation'
import Header from './components/Header'

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

function App() {
  // update viewport responsiveness from mobile to desktop
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    // prevent flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } })

    // set viewport unit on mobile
    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  return (
    <Router>
      <Header />
      {console.log(dimensions)}
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route exact path='/case-studies' component={CaseStudies} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/about-us' component={About} />
        <Route exact path='/approach' component={Approach} />
      </div>
      <Navigation />
    </Router>
  )
}

export default App
