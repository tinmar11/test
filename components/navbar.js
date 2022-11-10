import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NavigationLinks from './navigation-links'

const Navbar = (props) => {
  return (
    <>
      <div className={`navbar-container ${props.rootClassName} `}>
        <nav data-role="Header" className="navbar-header">
          <div className="navbar-container1">
            <Link href="/">
              <a className="navbar-link">
                <img
                  alt="logo"
                  src="/assets/logo.svg"
                  className="navbar-image"
                />
              </a>
            </Link>
          </div>
          <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
          <div className="navbar-btn-group">
              <ConnectButton chainStatus="none" />
          </div>
          <div data-type="BurgerMenu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="navbar-mobile-menu">
            <nav className="navbar-nav">
              <div className="navbar-container2">
                <img
                  alt="image"
                  src="/assets/logo.svg"
                  className="navbar-image1"
                />
                <div
                  data-type="CloseMobileMenu"
                  className="navbar-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
            </nav>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            height: 100px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .navbar-header {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: auto;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 140px;
            padding-right: 140px;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #ffffff;
          }
          .navbar-container1 {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-image {
            height: 3rem;
            align-self: center;
            text-decoration: none;
          }
          .navbar-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-button {
            color: #0000ff;
            border-color: #0000ff;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-image1 {
            height: 2rem;
          }
          .navbar-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 991px) {
            .navbar-header {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .navbar-icon {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-btn-group {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar-container {
              height: 59px;
            }
            .navbar-header {
              padding: var(--dl-space-space-unit);
            }
            .navbar-image {
              height: 2rem;
            }
            .navbar-mobile-menu {
              top: 0px;
              left: 0px;
              right: 0px;
              display: none;
              padding: 16px;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navbar
