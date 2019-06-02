import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.css"
import "./site.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />

        <main className="page-size">
          {children}
        </main>
        <footer className="py-5 bg-dark text-white">
          <div className="container">
            <div className="clearfix">
              <p className="text-center font-weight-bold text-sm-left float-sm-left mb-3">
                &copy; {new Date().getFullYear()} Smit
              </p>
              <ul className="list-inline text-center font-weight-bold text-sm-right float-sm-right">
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/smilingsmit"
                    className="text-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    Twitter
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/imsmit"
                    className="text-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    GitHub
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://in.linkedin.com/in/imsmit"
                    className="text-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-center mb-0">Built with Gatsby</p>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
