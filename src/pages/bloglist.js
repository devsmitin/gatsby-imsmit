import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogList = ({ data }) => {
    const blogPosts = data.allContentfulBlogPost.edges;
    return (
        <Layout>
            <SEO title="Blog posts" />
            <header className="py-5">
                <div className="container">
                    <h1 className="font-weight-bolder">All Blogs</h1>
                </div>
            </header>
            <section className="">
                <div className="container">
                    <div className="blogposts row mb-5">
                        {blogPosts.map(({ node: post }) => (
                            <div className="col-lg-6" key={post.id}>
                                <div className="card bg-light shadow-lg border-light mb-5">
                                    <div className="row no-gutters">
                                        <div className="col-md-5">
                                            <img
                                                className="img-fluid blog-thumbnail rounded shadow-sm"
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
                                                <ul className="tags list-unstyled">
                                                    {post.tags.map(tag => (
                                                        <li
                                                            className="tag badge badge-pill badge-success font-weight-normal text-capitalize mr-2 px-2 py-1"
                                                            key={tag}
                                                        >
                                                            {tag}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Link
                                                    className="d-block text-success font-weight-bold"
                                                    to={`/blogpost/${
                                                        post.slug
                                                    }`}
                                                >
                                                    Read More
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

export default BlogList;

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
