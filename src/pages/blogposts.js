import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPosts = ({ data }) => {
	const blogPosts = data.allContentfulBlogPost.edges;
	return (
		<Layout>
			<SEO title="Blog posts" />
			<div className="container py-5">
				<h1 className="mb-5">{"Here's a list of all blogposts!"}</h1>
				<div className="blogposts row">
					{blogPosts.map(({ node: post }) => (
						<div className="col-md-6" key={post.id}>
							<div className="card mb-3">
								<div className="row no-gutters">
									<div className="col-md-4">
										<img
											className="img-fluid"
											alt={post.title}
											src={post.image.file.url}
										/>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<div className="mb-1 text-muted float-right">
												{post.createdAt}
											</div>
											<h3 className="">{post.title}</h3>
											<span className="d-inline-block mb-2 text-primary" />
											<Link
												className="d-block"
												to={`/blogpost/${post.slug}`}
											>
												Continue reading
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					<span className="mgBtm__24" />
					<div className="col-md-12 text-center">
						<Link to="/">Go back to the homepage</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default BlogPosts;

export const query = graphql`
	query BlogPostsPageQuery {
		allContentfulBlogPost(limit: 1000) {
			edges {
				node {
					id
					title
					createdAt(formatString: "DD-MM-YYYY")
					slug
					body {
						body
					}
					image {
						file {
							url
						}
					}
					tags
				}
			}
		}
	}
`;
