import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.css"
import "../style/site.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <main className="page-size">
          {children}
        </main>
        <footer className="py-5 bg-dark text-white">
          <div className="container">
            <div className="clearfix">
              <p className="text-center font-weight-bold text-sm-left float-sm-left mb-3">
                With <span role="img" aria-label="love">❤️</span> by Smit
              </p>
              <ul className="list-inline text-center font-weight-bold text-sm-right float-sm-right">
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/devsmitin"
                    className="text-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    Twitter
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/devsmitin"
                    className="text-theme"
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
                    className="text-theme"
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
