import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as UpArrow } from '../assets/arrow-up-circle.svg'
import gsap from 'gsap'

let tl = gsap.timeline()

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false })

  useEffect(() => {
    // close menu when routes change
    history.listen(() => {
      setMenuState({ menuOpened: false })
    })

    // menu animation
    if (menuState.menuOpened === true) {
      tl.to('body', { duration: 0.01, css: { overflow: 'hidden' } })
        .to('.App', {
          duration: 1,
          y: dimensions.width <= 654 ? '70vh' : dimensions.height / 2,
          ease: 'expo.inOut'
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut'
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 10, strokeDasharray: 5 }
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 10, strokeDasharray: 20 }
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 40, strokeDasharray: 18 }
        })
        .to('#circle', {
          duration: 0.6,
          delay: -0.8,
          css: { strokeDashoffset: 0 }
        })
        .to('.hamburger-menu-close', {
          duration: 0.6,
          delay: -0.8,
          css: { display: 'block' }
        })
    } else {
      tl.to('.App', {
        duration: 1,
        y: 0,
        ease: 'expo.inOut'
      })
        .to('#circle', {
          duration: 0.6,
          delay: -0.6,
          css: { strokeDashoffset: -193, strokeDasharray: 227 }
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 10, strokeDasharray: 10 }
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 10, strokeDasharray: 10 }
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 40, strokeDasharray: 40 }
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut'
        })
        .to('.hamburger-menu-close', {
          css: { display: 'none' }
        })
        .to('body', {
          css: { overflow: 'auto' }
        })
    }
  }, [menuState.menuOpened])

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <Link to='/'>AGENCY.</Link>
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

export default withRouter(Header)
