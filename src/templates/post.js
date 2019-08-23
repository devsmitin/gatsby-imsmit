import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const { title, body, image, tags, createdAt } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="single-post border-top">
        {/* <div className="fade-wrapper position-absolute">
          <Img
            className="img-fluid featured-img-background"
            alt={title}
            fluid={image.fluid}
          />
        </div> */}
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="font-weight-bolder mb-0 mb-5">{title}</h1>
            </div>
            <div className="col-lg-12">
              <Img
                className="img-fluid featured-img shadow-sm rounded"
                alt={title}
                fluid={image.fluid}
              />
            </div>
            <div className="col-lg-10 mt-n4 mt-lg-n5">
              <div className="px-3 px-lg-0">
                <div className="bg-white p-3 px-lg-5 py-lg-5 shadow rounded mb-4">
                  <div className="mb-3 text-muted">
                    <span>Published on: {createdAt}</span>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: body.childMarkdownRemark.html,
                    }}
                  />
                </div>
                <div className="clearfix mb-3">
                  <span className="mr-3">Tags:</span>
                  <ul className="tags list-unstyled d-inline-block">
                    {tags.map(tag => (
                      <li
                        className="tag badge badge-pill badge-secondary font-weight-normal text-capitalize mr-2 px-2 py-1"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="clearfix">
                  <Link className="btn btn-sm btn-outline-success" to="/blogs">
                    All Posts
                  </Link>
                  <Link
                    className="float-right btn btn-sm btn-outline-success"
                    to="/"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid(resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      createdAt(formatString: "MMM DD, YYYY")
      tags
    }
  }
`
