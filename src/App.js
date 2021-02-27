import React, { useEffect } from 'react'
import Banner from './components/Banner'
import Cases from './components/Cases'
import Header from './components/Header'
import IntroOverlay from './components/IntroOverlay'
import './styles/App.scss'

function App() {
  // viewport unit on mobile
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  )
}

export default App
