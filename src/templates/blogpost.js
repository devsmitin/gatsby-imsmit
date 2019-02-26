import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";

const BlogPost = ({ data }) => {
	const { title, body, image, tags, createdAt } = data.contentfulBlogPost;
	return (
		<Layout>
			<SEO title={title} />
			<div className="fade-wrapper position-absolute">
				<Img
					className="img-fluid featured-img-background"
					alt={title}
					fluid={image.fluid}
				/>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10 py-5">
						<h1 className="font-weight-bolder mb-5">{title}</h1>
						<Img
							className="img-fluid featured-img rounded mb-5"
							alt={title}
							fluid={image.fluid}
						/>
						<div
							className="mb-3"
							dangerouslySetInnerHTML={{
								__html: body.childMarkdownRemark.html
							}}
						/>
						<div className="mb-2 text-muted">
							<small>Published on: {createdAt}</small>
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
							<Link
								className="btn btn-sm btn-outline-success"
								to="/blogs"
							>
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
		</Layout>
	);
};

export default BlogPost;

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
`;
