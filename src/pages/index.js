import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <div className="container my-5">
      <div className="hero">
        <div className="h4">
          <h1 className="mb-1 d-inline-block mr-1">
            <span className="display-4">
              <strong>Smit</strong> Modi
            </span>
          </h1>{" "}
          <span className="badge badge-light text-primary align-top py-2">
            Sr. Software Engineer
          </span>
        </div>

        <p className="email font-weight-normal">smit.m.official@gmail.com</p>

        <h2 className="my-5">
          Fullstack Developer with 5<sup>+</sup> years of experience.
        </h2>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="h6 font-weight-bold mb-4">Skills</h2>

          <div className="d-flex mb-4">
            <span className="w-25 text-primary">+ 1.5 years</span>
            <div className="w-75">
              <h3 className="h6 font-weight-bold mb-1">Shopify Plus</h3>
              <span className="font-weight-normal">
                Theme development & store customization
              </span>
            </div>
          </div>

          <div className="d-flex mb-4">
            <span className="w-25 text-primary">+ 2.5 years</span>
            <div className="w-75">
              <h3 className="h6 font-weight-bold mb-1">
                WordPress Development
              </h3>
              <span className="font-weight-normal">
                Theme integration & development
              </span>
            </div>
          </div>

          <div className="d-flex mb-4">
            <span className="w-25 text-primary">+ 4.5 years</span>
            <div className="w-75">
              <h3 className="h6 font-weight-bold mb-1">Frontend Development</h3>
              <span className="font-weight-normal">
                HTML, CSS, JavaScript (ES6, jQuery, React JS)
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="h6 font-weight-bold mb-4">Interests</h2>

          <div className="d-flex mb-4">
            <div className="">
              <h3 className="h6 font-weight-bold mb-1">Scripting languages</h3>
              <span className="font-weight-normal">JS, PHP, Bash</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="h6 font-weight-bold mb-4">Experience</h2>
        </div>
        <div className="col-md-6">
          <div className="card card-body text-center bg-light px-3 py-5 p-md-5 mb-3 border-0">
            <span className="display-4">
              <strong>
                <span className="text-primary">
                  300<sup>+</sup>
                </span>
              </strong>{" "}
              Projects
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-body text-center bg-light px-3 py-5 p-md-5 mb-3 border-0">
            <span className="display-4">
              <strong>
                <span className="text-primary">
                  5<sup>+</sup>
                </span>
              </strong>{" "}
              Years
            </span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
