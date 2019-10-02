import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const BlogList = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="My Blogs" />
      <section className="py-5 border-top">
        <div className="container">
          <header className="mb-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1 className="title-font">My Blogs</h1>
              </div>
            </div>
          </header>
          <div className="blogposts row">
            {blogPosts.map(({ node: post }) => (
              <div className="col-lg-6" key={post.id}>
                <article>
                  <div className="card blog-list-card shadow-sm mb-4">
                    <Img
                      className="img-fluid blog-thumbnail shadow-sm"
                      alt={post.title}
                      fluid={post.image.fluid}
                    />
                    <div className="card-body">
                      <header>
                        <h2 className="title-font">
                          <Link
                            className="d-block text-theme stretched-link"
                            to={`/blogs/${post.slug}`}
                          >
                            {post.title}
                          </Link>
                        </h2>
                      </header>
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
                      <footer>
                        <div className="mb-1 text-muted">
                          Published on:{" "}
                          <span className="text-theme">{post.createdAt}</span>
                        </div>
                      </footer>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="text-center mb-4">
            <Link className="text-theme font-weight-bold" to="/">
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
