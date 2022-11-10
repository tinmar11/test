import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const KeyOwner = (props) => {
  return (
    <>
      <div className="key-owner-container">
        <Head>
          <title>Key-Owner - BeRies</title>
          <meta
            property="og:title"
            content="Key-Owner - BeRies"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name1"></Navbar>
        <section id="title section" className="key-owner-title-section">
          <h1 className="H1 key-owner-text">BeRies key owner</h1>
          <span className="key-owner-text01 paragraph">
            <span>
              If you have the BeRies key, this page is for you.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>If you want to get it, try by following this link.</span>
          </span>
          <span className="key-owner-text05 paragraph">
            <span>
              Before the release of Drop 1, there will be the release of a
              unique NFT, giving access to a large number of advantages that
              only the holder of this NFT will have. If you really believe in
              BeRies and its team, that you think the project is solid and that
              the team is determined to carry it out, then this NFT will clearly
              allow you to join the team, having access to the backstage of the
              construction.
            </span>
            <br></br>
          </span>
          <span className="paragraph">
            For now, there are no plans for such NFTs in the future.
          </span>
        </section>
        <main id="claim your nft" className="key-owner-claim-your-nft">
          <div className="key-owner-container1">
            <img
              alt="image"
              src="/assets/key-600w.png"
              className="key-owner-image"
            />
          </div>
          <div className="key-owner-container2">
            <div className="key-owner-container3">
              <h1 className="h3">Claim your NFT</h1>
              <span className="paragraph2">
                You can claim all NFT’s of all the packs, for free.
              </span>
              <span className="paragraph2">
                *As a reminder, unique items will be added to your package, this
                is part of the advantages of the key.
              </span>
              <select id="key-mint" name="key-mint" required className="select">
                <option value="Option 1" selected>
                  Option 1
                </option>
              </select>
              <button className="key-owner-button mint-button button">
                Mint for free
              </button>
              <span className="paragraph2">
                Have you already mint it ? Claim your clothes here.
              </span>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .key-owner-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .key-owner-title-section {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            margin-top: 20px;
            align-items: flex-start;
            padding-left: 140px;
            margin-bottom: 20px;
            padding-right: 140px;
            flex-direction: column;
          }
          .key-owner-text01 {
            padding-bottom: 20px;
          }
          .key-owner-text05 {
            padding-bottom: 20px;
          }
          .key-owner-claim-your-nft {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-left: 140px;
            padding-right: 140px;
            justify-content: space-between;
            background-color: #0000ff;
          }
          .key-owner-container1 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
          }
          .key-owner-image {
            width: 80%;
            align-self: center;
            object-fit: cover;
          }
          .key-owner-container2 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .key-owner-container3 {
            gap: 10px;
            flex: 0 0 auto;
            width: 80%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: column;
          }
          .key-owner-button {
            border-width: 0px;
          }
          @media (max-width: 1200px) {
            .key-owner-claim-your-nft {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 991px) {
            .key-owner-title-section {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .key-owner-claim-your-nft {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .key-owner-title-section {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .key-owner-text {
              font-size: 40px;
              text-align: left;
            }
            .key-owner-claim-your-nft {
              padding: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .key-owner-container1 {
              width: auto;
            }
            .key-owner-container2 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default KeyOwner
