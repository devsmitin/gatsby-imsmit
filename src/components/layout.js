import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./bootstrap.css";

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
					className="py-3 bg-dark text-white"
					style={{
						minHeight: "calc(100vh - 112px)"
					}}
				>
					<div className="container">{children}</div>
				</main>
				<footer className="bg-secondary text-white-50 py-3">
					<div className="container">
						© {new Date().getFullYear()}, Built with
						{` `}
						<a
							href="https://www.gatsbyjs.org"
							className="text-white"
						>
							Gatsby
						</a>
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
