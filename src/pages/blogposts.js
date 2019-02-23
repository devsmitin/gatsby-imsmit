import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPosts = ({ data }) => {
    const blogPosts = data.allContentfulBlogPost.edges;
    return (
        <Layout>
            <SEO title="Blog posts" />
            <header className="py-5">
                <div className="container">
                    <h1 className="font-weight-bolder">All Blogs</h1>
                </div>
            </header>
            <section className="py-5">
                <div className="container">
                    <div className="blogposts row mb-5">
                        {blogPosts.map(({ node: post }) => (
                            <div className="col-md-6" key={post.id}>
                                <div className="card bg-light shadow-lg border-0 mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-5">
                                            <img
                                                className="img-fluid blog-thumbnail rounded mt-n3 mb-3 ml-3 shadow-sm"
                                                alt={post.title}
                                                src={post.image.file.url}
                                            />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <div className="mb-1 text-muted">
                                                    {post.createdAt}
                                                </div>
                                                <h2 className="font-weight-bolder">
                                                    {post.title}
                                                </h2>
                                                <span className="d-inline-block mb-2 text-primary" />
                                                <Link
                                                    className="d-block text-success font-weight-bold"
                                                    to={`/blogpost/${
                                                        post.slug
                                                    }`}
                                                >
                                                    Continue reading
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link className="text-success font-weight-bold" to="/">
                            Go back to the homepage
                        </Link>
                    </div>
                </div>
            </section>
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
