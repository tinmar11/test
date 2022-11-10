import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Burn = (props) => {
  return (
    <>
      <div className="burn-container">
        <Head>
          <title>Burn - BeRies</title>
          <meta property="og:title" content="Burn - BeRies" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
        <section id="Title" className="burn-container1">
          <h1 className="H1 burn-text">Burn for shipping</h1>
          <span className="paragraph">
            Burn your NFT to receive the BeRies pack you choose.
          </span>
        </section>
        <main id="burn for shipping" className="burn-container2">
          <div className="burn-image-container">
            <img
              alt="image"
              src="/assets/tee%20burn-600w.png"
              className="burn-image"
            />
          </div>
          <div className="burn-burn-form-container">
            <div className="burn-container3">
              <h1 className="h3">Choose wich NFT to burn</h1>
              <select className="select">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <button className="burn-button mint-button button">Button</button>
              <span className="paragraph2">
                Have you already burned it ? Claim your cloths here.
              </span>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .burn-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .burn-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            padding-left: 140px;
            margin-bottom: 40px;
            padding-right: 140px;
            flex-direction: column;
            justify-content: center;
          }
          .burn-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 140px;
            padding-right: 140px;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #0000ff;
          }
          .burn-image-container {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .burn-image {
            width: 80%;
            align-self: center;
            object-fit: cover;
          }
          .burn-burn-form-container {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .burn-container3 {
            gap: 10px;
            width: 420px;
            height: 229px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .burn-button {
            border-width: 0px;
          }
          @media (max-width: 1200px) {
            .burn-container2 {
              height: auto;
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .burn-image {
              align-self: center;
            }
            .burn-burn-form-container {
              width: auto;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .burn-container3 {
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .burn-container2 {
              height: auto;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .burn-image {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .burn-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .burn-container2 {
              height: auto;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .burn-image-container {
              width: 300px;
              align-self: center;
              align-items: center;
            }
            .burn-image {
              align-self: center;
            }
            .burn-burn-form-container {
              height: auto;
              align-self: stretch;
            }
          }
          @media (max-width: 479px) {
            .burn-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .burn-text {
              font-size: 40px;
              text-align: left;
            }
            .burn-container2 {
              height: auto;
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .burn-image {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Burn
