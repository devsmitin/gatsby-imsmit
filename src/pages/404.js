import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3 text-center py-3">
          <Image />
        </div>
        <div className="col-md-12 text-center">
          <h1>You're on the wrong way, human</h1>
          <p>You just hit a route that doesn't exist... the sadness.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
