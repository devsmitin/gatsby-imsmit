import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import headGraphic from "../images/imsmit.png"
import bioGraphic from "../images/undraw_responsive_6c8s.svg"

const IndexPage = () => (
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
            <div className="content pl-md-4">
              <h1 className="shadow-line font-weight-bold display-4 display-font">
                &lt;DevSmit/&gt;
              </h1>
              <h2 className="font-weight-bold subtitle hover-text">
                Hi, my name is <span>Smit Modi</span>.
                <br /> I'm a web developer from <span>India</span>.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
)

export default IndexPage
