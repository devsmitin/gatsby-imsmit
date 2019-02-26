import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./bootstrap.css";
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
							<span>&copy; {new Date().getFullYear()} Smit</span>
							<span className="float-right">
								Built with Gatsby
							</span>
						</div>
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
