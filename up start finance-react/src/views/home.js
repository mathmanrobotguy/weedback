import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Up Start Finance</title>
        <meta property="og:title" content="Up Start Finance" />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="home-image"
            />
            <span className="brand-Name">
              <span className="home-text01">Weedback</span>
            </span>
          </div>
          <div className="home-links">
            <span className="home-text02 navbar-Link"></span>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle before-Heading">
              <span>Weedback</span>
            </span>
            <h1 className="home-title">
              <span className="home-text04">
                A D.A.O promoting reliabilty, quality and equality in the craft
                cannabis community.
              </span>
            </h1>
            <span className="home-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container1"></div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/union-400w.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/playground_assets/group%2018-1200w.png"
              className="home-image2"
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/photo_2022-08-10_01-38-10-700h.jpg"
            className="home-image3"
          />
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image4">
            <img
              alt="image"
              src="/playground_assets/photo_2022-08-10_00-01-45-600w.jpg"
              className="home-image5"
            />
          </div>
          <div className="home-content1">
            <span className="home-text05 before-Heading">how it works</span>
            <h1 className="home-text06">
              <span className="home-text07">
                Pay and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text08">
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text09">than ever.</span>
              <span className="home-text10"></span>
            </h1>
            <span className="home-text11">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container2">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <h1 className="home-text12">Cannabis #1</h1>
            <span className="home-text13">
              <span>Producer name</span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                {' '}
                Strain Name
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Cultivation
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span> Quality grade - A, AA, AAA</span>
              <br></br>
              <span>
                {' '}
                Nutrient input - organic, regenerative, or conventional
              </span>
              <br></br>
              <span> Method - Hydroponics, soil or soilless</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Product
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span> Flower</span>
              <br></br>
              <span>
                {' '}
                Extraction method (water, alcohol, oil)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Extracts (hash, rosin,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span> Edibles</span>
              <br></br>
              <span>
                {' '}
                THC concentration
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span> Terpene profile</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>Effects</span>
              <br></br>
              <span> Euphoric</span>
              <br></br>
              <span> Energetic</span>
              <br></br>
              <span>
                {' '}
                Creative
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span> Pine</span>
              <br></br>
              <span> Spicy/Herbal</span>
              <br></br>
              <span> Lemon</span>
            </span>
            <div className="home-container3"></div>
          </div>
          <img
            alt="image"
            src="/playground_assets/photo_2022-08-10_01-41-23-600w.jpg"
            className="home-image6"
          />
          <div className="home-image7"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
