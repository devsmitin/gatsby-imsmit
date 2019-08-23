import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import Img from "gatsby-image"
import SEO from "../components/seo"

const BlogList = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="My Blogs" />
      <header className="py-5 bg-light border-bottom border-top">
        <div className="container">
          <h1 className="font-weight-bolder">My Blogs</h1>
        </div>
      </header>
      <section className="bg-header py-5">
        <div className="container">
          <div className="blogposts row">
            {blogPosts.map(({ node: post }) => (
              <div className="col-lg-12" key={post.id}>
                <div className="card blog-list-card shadow-sm mb-4">
                  {/* <div className="row no-gutters"> */}
                    {/* <div className="col-md-2"> */}
                      {/* <Img
                        className="img-fluid blog-thumbnail rounded shadow-sm"
                        alt={post.title}
                        fluid={post.image.fluid}
                      /> */}
                    {/* </div> */}
                    {/* <div className="col-md-10"> */}
                      <div className="card-body">
                        <h2 className="font-weight-bolder">
                          <Link
                            className="d-block text-success font-weight-bold stretched-link"
                            to={`/blogs/${post.slug}`}
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <ul className="tags list-unstyled">
                          {post.tags.map(tag => (
                            <li
                              className="tag badge badge-pill badge-secondary font-weight-normal text-capitalize mr-2 px-2 py-1"
                              key={tag}
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                        <div className="mb-1 text-muted">{post.createdAt}</div>
                      </div>
                    {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mb-4">
            <Link className="text-success font-weight-bold" to="/">
              Go back to the homepage
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogList

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          createdAt(formatString: "MMM DD, YYYY")
          slug
          body {
            body
          }
          image {
            fluid(resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          tags
        }
      }
    }
  }
`
