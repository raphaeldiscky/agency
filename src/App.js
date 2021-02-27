import React, { useEffect } from 'react'
import Banner from './components/Banner'
import Cases from './components/Cases'
import Header from './components/Header'
import IntroOverlay from './components/IntroOverlay'
import './styles/App.scss'
import gsap from 'gsap'

function App() {
  // viewport unit on mobile
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // prevent flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } })

    // gsap timeline
    const tl = gsap.timeline()
    tl.from('.line span', 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
      .to('.overlay-top', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: 0.4
      })
      .to('.overlay-bottom', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        delay: -0.8,
        stagger: {
          amount: 0.4
        }
      })
      .to('.intro-overlay', 0, { css: { display: 'none' } })
      .from('.case-image img', 1.6, {
        scale: 1.4,
        ease: 'ease.inOut',
        delay: -2,
        stagger: {
          amount: 0.4
        }
      })
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
