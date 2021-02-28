import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as UpArrow } from '../assets/arrow-up-circle.svg'
import gsap from 'gsap'

let tl = gsap.timeline()

const Header = ({ dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false })

  useEffect(() => {
    if (menuState.menuOpened === true) {
      gsap.to('nav', { css: { display: 'block' } })
      gsap.to('body', { css: { overflow: 'hidden' } })
      tl.to('.App', {
        duration: 1,
        y: dimensions.width <= 654 ? '70vh' : dimensions.height / 2,
        ease: 'expo.inOut'
      })
    } else {
    }
  })

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <a href='/'>AGENCY.</a>
          </div>
          <div className='nav-toggle'>
            <div
              className='hamburger-menu'
              onClick={() => setMenuState({ menuOpened: true })}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className='hamburger-menu-close'
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
