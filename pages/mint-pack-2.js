import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const MintPack2 = (props) => {
  return (
    <>
      <div className="mint-pack2-container">
        <Head>
          <title>Mint-pack-2 - BeRies</title>
          <meta
            property="og:title"
            content="Mint-pack-2 - BeRies"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <main
          id="mint pack container"
          className="mint-pack2-mint-pack-container"
        >
          <div className="mint-pack2-container1">
            <img
              alt="image"
              src="/assets/nft-boite-pack-2-1500h.webp"
              className="mint-pack2-image"
            />
          </div>
          <div className="mint-pack2-container2">
            <div className="mint-pack2-container3">
              <span className="h3">Pack 2</span>
              <span className="mint-pack2-text1 paragraph">
                1 Tee - 1 Hoodie - 1 Cap
              </span>
              <button
                id="mint pack 2 button"
                type="button"
                className="mint-pack2-mint-pack-2-button mint-button button"
              >
                Mint for 0.1 ETH
              </button>
              <a href="#item-of-this-pack" className="mint-pack2-link">
                See clothes here
              </a>
            </div>
          </div>
        </main>
        <section
          id="item-of-this-pack"
          className="mint-pack2-item-of-this-pack"
        >
          <h1 className="mint-pack2-text2 H1">Item of this pack</h1>
          <div className="mint-pack2-container4">
            <div className="mint-pack2-container5">
              <img
                alt="image"
                src="/assets/tee%20burn-300h.png"
                className="mint-pack2-image1"
              />
              <span className="mint-pack2-text3">Item title</span>
            </div>
            <div className="mint-pack2-container6">
              <img
                alt="image"
                src="/assets/tee%20burn-300h.png"
                className="mint-pack2-image2"
              />
              <span className="mint-pack2-text4">Item title</span>
            </div>
            <div className="mint-pack2-container7">
              <img
                alt="image"
                src="/assets/tee%20burn-300h.png"
                className="mint-pack2-image3"
              />
              <span className="mint-pack2-text5">Item title</span>
            </div>
          </div>
        </section>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .mint-pack2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #000000;
          }
          .mint-pack2-mint-pack-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            padding-left: 140px;
            padding-right: 140px;
          }
          .mint-pack2-container1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .mint-pack2-image {
            width: auto;
            height: 50%;
            align-self: center;
            object-fit: cover;
          }
          .mint-pack2-container2 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .mint-pack2-container3 {
            gap: 10px;
            flex: 0 0 auto;
            width: 70%;
            height: 80%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .mint-pack2-text1 {
            color: rgb(255, 255, 255);
          }
          .mint-pack2-mint-pack-2-button {
            color: #000000;
            border-width: 0px;
          }
          .mint-pack2-link {
            color: rgb(255, 255, 255);
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-twounits);
            text-decoration: underline;
          }
          .mint-pack2-item-of-this-pack {
            width: 100%;
            height: 385px;
            display: flex;
            align-self: stretch;
            margin-top: 40px;
            align-items: flex-start;
            padding-left: 140px;
            margin-bottom: 40px;
            padding-right: 140px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .mint-pack2-text2 {
            color: rgb(255, 255, 255);
            font-size: 48px;
            margin-bottom: 40px;
          }
          .mint-pack2-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .mint-pack2-container5 {
            flex: 0 0 auto;
            width: 33%;
            height: 262px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-pack2-image1 {
            width: 250px;
            align-self: center;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .mint-pack2-text3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .mint-pack2-container6 {
            flex: 0 0 auto;
            width: 33%;
            height: 262px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-pack2-image2 {
            width: 250px;
            align-self: center;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .mint-pack2-text4 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .mint-pack2-container7 {
            flex: 0 0 auto;
            width: 33%;
            height: 262px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-pack2-image3 {
            width: 250px;
            align-self: center;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .mint-pack2-text5 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          @media (max-width: 1200px) {
            .mint-pack2-container1 {
              justify-content: center;
            }
            .mint-pack2-image {
              height: 50%;
              align-self: center;
            }
            .mint-pack2-container2 {
              align-self: center;
              align-items: flex-end;
            }
            .mint-pack2-container3 {
              align-self: flex-end;
              align-items: flex-start;
            }
          }
          @media (max-width: 991px) {
            .mint-pack2-image {
              height: 40%;
            }
            .mint-pack2-item-of-this-pack {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .mint-pack2-mint-pack-container {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .mint-pack2-container1 {
              width: 100%;
              height: 50%;
            }
            .mint-pack2-image {
              height: 100%;
              padding-top: var(--dl-space-space-threeunits);
            }
            .mint-pack2-container2 {
              width: 80%;
              height: auto;
              padding-top: 100px;
            }
            .mint-pack2-container3 {
              gap: 20;
              width: 100%;
              align-self: center;
            }
            .mint-pack2-item-of-this-pack {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .mint-pack2-container4 {
              gap: 30px;
              width: auto;
              height: auto;
              align-self: stretch;
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .mint-pack2-container5 {
              width: auto;
              height: auto;
            }
            .mint-pack2-image1 {
              width: 200px;
            }
            .mint-pack2-container6 {
              width: auto;
              height: auto;
            }
            .mint-pack2-image2 {
              width: 200px;
            }
            .mint-pack2-container7 {
              width: auto;
              height: auto;
            }
            .mint-pack2-image3 {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .mint-pack2-container {
              background-color: #000000;
            }
            .mint-pack2-container1 {
              height: auto;
            }
            .mint-pack2-image {
              width: 100%;
            }
            .mint-pack2-container2 {
              width: 100%;
            }
            .mint-pack2-container3 {
              gap: 20px;
              width: 100%;
              height: auto;
            }
            .mint-pack2-mint-pack-2-button {
              color: #000000;
            }
            .mint-pack2-item-of-this-pack {
              height: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mint-pack2-text2 {
              font-size: 40px;
              text-align: left;
            }
            .mint-pack2-container4 {
              gap: 40;
              flex-direction: column;
            }
            .mint-pack2-image1 {
              width: auto;
            }
            .mint-pack2-image2 {
              width: auto;
            }
            .mint-pack2-image3 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default MintPack2
