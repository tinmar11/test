import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <footer className="footer-footer">
          <div className="footer-links-container">
            <div className="footer-container1">
              <span className="footer-text footer-title">
                More about BeRies
              </span>
              <span className="footer-text1 footer-text">
                Contact BeRies here
              </span>
              <span className="footer-text2 footer-text">Documentation</span>
              <span className="footer-text3 footer-text">
                Partner Blueberry
              </span>
            </div>
            <div className="footer-container2">
              <span className="footer-text4 footer-title">Newsletter</span>
              <input
                type="text"
                placeholder={props.textinput_placeholder}
                className="input newsletter"
              />
            </div>
            <div className="footer-container3">
              <div className="footer-icon-group">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="footer-image"
                />
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="footer-image1"
                />
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="footer-image2"
                />
              </div>
              <span className="footer-text">BeRies is Worlwide</span>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: 275px;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: column;
            background-color: #ffffff;
          }
          .footer-footer {
            width: 100%;
            height: 275px;
            display: flex;
            padding: 140x;
            max-width: auto;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: space-between;
          }
          .footer-links-container {
            width: 100%;
            height: 189px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .footer-text1 {
            margin-bottom: 10px;
          }
          .footer-text2 {
            margin-bottom: 10px;
          }
          .footer-text3 {
            margin-bottom: 10px;
          }
          .footer-container2 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text4 {
            margin-bottom: 100px;
          }
          .footer-container3 {
            flex: 0 0 auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer-icon-group {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-image {
            width: auto;
            height: 40px;
            object-fit: cover;
          }
          .footer-image1 {
            width: auto;
            height: 40px;
            object-fit: cover;
          }
          .footer-image2 {
            width: auto;
            height: 40px;
            object-fit: cover;
          }

          @media (max-width: 1200px) {
            .footer-links-container {
              justify-content: space-between;
            }
          }
          @media (max-width: 991px) {
            .footer-container {
              height: 331px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .footer-footer {
              height: 100%;
              align-self: stretch;
              align-items: stretch;
              padding-top: 0px;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .footer-links-container {
              width: 991px;
              height: auto;
              align-self: stretch;
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: row;
              justify-content: space-between;
            }
            .footer-container1 {
              width: auto;
              height: 100%;
              align-items: stretch;
              margin-left: 0x;
              flex-direction: column;
            }
            .footer-container2 {
              height: 100%;
              align-items: stretch;
            }
            .footer-container3 {
              align-items: stretch;
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              background-color: #ffffff;
            }
            .footer-links-container {
              width: 720px;
              margin-top: 0px;
              align-items: center;
              flex-direction: row;
              justify-content: space-between;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-unit);
            }
            .footer-container2 {
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              height: auto;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
              background-color: #ffffff;
            }
            .footer-links-container {
              height: auto;
              align-self: stretch;
              align-items: stretch;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-container1 {
              height: auto;
            }
            .footer-text1 {
              margin-bottom: 0px;
            }
            .footer-text2 {
              margin-bottom: 0px;
            }
            .footer-text3 {
              margin-bottom: 0px;
            }
            .footer-container2 {
              height: auto;
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-right: 0px;
            }
            .footer-text4 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-container3 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .footer-icon-group {
              gap: 30;
              justify-content: flex-start;
            }
            .footer-image {
              margin-right: 20px;
            }
            .footer-image1 {
              margin-right: 20px;
            }
            .footer-image2 {
              margin-right: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  image_src2: '/assets/insta-icon-200h.webp',
  image_alt2: 'image',
  textinput_placeholder: 'placeholder',
  image_src1: '/assets/medium-icon-200h.webp',
  image_alt: 'image',
  image_alt1: 'image',
  rootClassName: '',
  image_src: '/assets/twitter-icon-200h.webp',
}

Footer.propTypes = {
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Footer
