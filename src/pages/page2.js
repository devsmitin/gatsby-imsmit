import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import headGraphic from "../assets/smit.jpg"
import bioGraphic from "../assets/undraw_responsive_6c8s.svg"

const Page2 = () => (
  <Layout>
    <SEO
      title="Front-end Developer &amp; Designer"
      keywords={[
        `Smit`,
        `Smit Modi`,
        `imsmit`,
        `Front-end`,
        `Developer`,
        `Designer`,
        `Gatsby Developer`,
      ]}
    />
    <header className="py-3 bg-header border-top border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="stylized-background">
              <img
                src={headGraphic}
                alt="Creator"
                className="creator-img img-fluid my-5"
              />
            </div>
          </div>
          <div className="col-md-7 d-flex align-items-center">
            <div className="content pl-md-4 pl-lg-5">
              <h1 className="display-font mb-md-4">
                <span className="shadow-line">Hi, I'm Smit.</span>
              </h1>
              <p className="h4 hover-text">
                I'm a creative Frontend <span>Developer</span>,{" "}
                <span>Designer</span>, and <span>Superman</span> from India.{" "}
                <span
                  role="img"
                  aria-label="smiley"
                  className="hover-text-hidden"
                >
                  😎
                </span>
              </p>
              <p className="h4 hover-text">
                I love cinema, music, photography, art and I'm also good at{" "}
                <span>sketching portraits</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 order-md-1 offset-md-1">
            <img src={bioGraphic} alt="Creator" className="img-fluid my-5" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="content">
              <p className="lead font-weight-normal hover-text">
                I love all things about web development &amp; design. I have
                active or passive participation in making of{" "}
                <span className="font-weight-strong">100+</span> ordinary
                websites. I like to explore latest tech for web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Page2
