import React from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Slider.module.css';
import Image from 'next/image';
import { useState } from "react";
const Home = (props) => {

  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === 'left') {
      setIndex(index !== 0 ? index - 1 : 3);
    }
    if (direction === 'right') {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  }
  console.log(index);

  return (
    <>
      <div className="home-container">
        <Head>
          <title>BeRies</title>
          <meta property="og:title" content="BeRies" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <main id="slider" className="home-slider">
              <div className={styles.leftArrowContainer} style={{left:0}} onClick={() => handleArrow("left")}>
                  
                  <Image src="/assets/arrow.svg" className={styles.arrowl} width={40} height={40} />
              </div>
            
              <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)` }}>
                  <div className={styles.pack1Container}>

                  </div>
                  <div className={styles.pack2Container}>

                  </div>
                  <div className={styles.pack3Container}>

                  </div>
                  <div className={styles.pack4Container}>
                    
                  </div>
              </div>

            <div className={styles.rightArrowContainer} style={{right:0}} onClick={() => handleArrow("right")}>
            <Image src="/assets/arrow.svg" className={styles.arrowr} width={40} height={40} />
            </div>
        </main>
        <section id="how it works" className="home-steps">
          <h1 className="H1">How it works ?</h1>
          <div className="home-steps-container">
            <div className="home-step-1">
              <div className="home-container01">
                <div className="home-line"></div>
                <div className="home-container02">
                  <img
                    alt="image"
                    src="/assets/1.svg"
                    className="home-image"
                  />
                </div>
                <div className="home-line1"></div>
              </div>
              <div className="home-container03">
                <h1 className="home-text01">Mint</h1>
                <span className="home-text02">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step-2">
              <div className="home-container04">
                <div className="home-line2"></div>
                <div className="home-container05">
                  <img
                    alt="image"
                    src="/assets/2.svg"
                    className="home-image01"
                  />
                </div>
                <div className="home-line3"></div>
              </div>
              <div className="home-container06">
                <h1 className="home-text05">Burn</h1>
                <span className="home-text06">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step-3">
              <div className="home-container07">
                <div className="home-line4"></div>
                <div className="home-container08">
                  <img
                    alt="image"
                    src="/assets/3.svg"
                    className="home-image02"
                  />
                </div>
                <div className="home-line5"></div>
              </div>
              <div className="home-container09">
                <h1 className="home-text09">Shipping</h1>
                <span className="home-text10">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="meet our team" className="home-meet-our-team">
          <h1 className="home-text13 H1">Meet our team</h1>
          <div className="home-team-1row-container">
            <div className="home-container10">
              <img
                id="team-pic"
                alt="image"
                src="/assets/account-200h.png"
                className="team-pic"
              />
              <div className="home-container11">
                <span className="team-name">@0x11nze</span>
                <span className="home-text15 team-role">
                  CEO - Artistic Director
                </span>
              </div>
            </div>
            <div className="home-container12">
              <img
                alt="image"
                src="/assets/account-200h.png"
                className="home-image04 team-pic"
              />
              <div className="home-container13">
                <span className="home-text16 team-name">@0xTinmar</span>
                <span className="home-text17 team-role">Front End Dev</span>
              </div>
            </div>
            <div className="home-container14">
              <img
                alt="image"
                src="/assets/account-200h.png"
                className="home-image05 team-pic"
              />
              <div className="home-container15">
                <span className="home-text18 team-name">@Johra</span>
                <span className="home-text19 team-role">Solidity Dev</span>
              </div>
            </div>
            <div className="home-container16">
              <img
                alt="image"
                src="/assets/account-200h.png"
                className="home-image06 team-pic"
              />
              <div className="home-container17">
                <span className="home-text20 team-name">@1tbk1</span>
                <span className="home-text21 team-role">Chief Editor</span>
              </div>
            </div>
          </div>
          <div className="home-container18">
            <div className="home-container19">
              <img
                alt="image"
                src="/assets/account-200h.png"
                className="home-image07 team-pic"
              />
              <div className="home-container20">
                <span className="home-text22 team-name">@SpadeFX</span>
                <span className="home-text23 team-role">BeRies Builder</span>
              </div>
            </div>
            <div className="home-container21">
              <img
                alt="image"
                src="/assets/account-200h.png"
                className="home-image08 team-pic"
              />
              <div className="home-container22">
                <span className="home-text24 team-name">@IdrissMarcus</span>
                <span className="home-text25 team-role">Muse</span>
              </div>
            </div>
            <div className="home-container23">
              <img
                alt="image"
                src="/assets/account-200h.png"
                className="home-image09 team-pic"
              />
              <div className="home-container24">
                <span className="home-text26 team-name">@Kahili_S</span>
                <span className="team-role">Muse</span>
              </div>
            </div>
          </div>
        </section>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-slider {
            width: 100%;
            height: 550px;
            display: flex;
            overflow: hidden;
            padding: var(--dl-space-space-threeunits);
            
            flex-direction: column;
            justify-content: center;
            background-color: #0000ff;
            padding: 0px;
          }
          .arrowr{
            transform: rotate(180deg);
          }
          .leftArrowContainer{
            position: absolute;
            height: 500px;
            width: 50px;
            margin-left: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .rightArrowContainer{
            position: absolute;
            height: 500px;
            width: 40px;
            margin-right: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .home-steps {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-steps-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-step-1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-image {
            width: 100px;
            object-fit: cover;
          }
          .home-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container03 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-step-2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-image01 {
            width: 100px;
            object-fit: cover;
          }
          .home-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container06 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text05 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text06 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-step-3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-image02 {
            width: 100px;
            object-fit: cover;
          }
          .home-line5 {
            flex: 1;
            height: 0px;
            display: flex;
            opacity: 0%;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container09 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text09 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text10 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-meet-our-team {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #0000ff;
          }
          .home-text13 {
            color: #ffffff;
          }
          .home-team-1row-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text15 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image04 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text16 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text17 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image05 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text19 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image06 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text20 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text21 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .home-container19 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image07 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text22 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text23 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container21 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image08 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text24 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text25 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container23 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image09 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text26 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          @media (max-width: 767px) {
            .home-slider {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-steps-container {
              align-items: flex-start;
              padding-left: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .home-step-1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container01 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container03 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text01 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text02 {
              text-align: left;
            }
            .home-step-2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container04 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container06 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text05 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text06 {
              text-align: left;
            }
            .home-step-3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container07 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line5 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container09 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text09 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text10 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .home-slider {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-steps-container {
              padding-left: 0px;
            }
            .home-container03 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text01 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container06 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text05 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container09 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text09 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
