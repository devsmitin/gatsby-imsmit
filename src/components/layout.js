import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "bootstrap/dist/css/bootstrap.css";
import "./site.css";

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

                <main
                    style={{
                        minHeight: "calc(100vh - 176px)"
                    }}
                >
                    {children}
                </main>
                <footer className="py-5 bg-light">
                    <div className="container">
                        <div className="clearfix">
                            <p className="text-center text-sm-left float-sm-left mb-3">
                                &copy; {new Date().getFullYear()} Smit
                            </p>
                            <ul class="list-inline text-center text-sm-right float-sm-right">
                                <li class="list-inline-item">
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
                                <li class="list-inline-item">
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
                                <li class="list-inline-item">
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
                        <p className="text-center mb-0">
                            Built with Gatsby / Contentful
                        </p>
                    </div>
                </footer>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
