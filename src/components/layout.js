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
					style={{
						minHeight: "calc(100vh - 112px)"
					}}
				>
					{children}
				</main>
				<footer className="bg-secondary text-white py-3">
					<div className="container">
						© {new Date().getFullYear()}, Built with Gatsby
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
