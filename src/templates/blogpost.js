import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPost = ({ data }) => {
    const { title, body, image, tags } = data.contentfulBlogPost;
    return (
        <Layout>
            <SEO title={title} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 py-5">
                        <h1 className="font-weight-bolder mb-3">{title}</h1>
                        <img
                            className="img-fluid featured-img rounded mb-5"
                            alt={title}
                            src={image.file.url}
                        />
                        <p className="body-text">{body.body}</p>

                        <div className="clearfix">
                            <span className="mr-3">Tags:</span>
                            <ul className="tags list-unstyled d-inline-block">
                                {tags.map(tag => (
                                    <li
                                        className="tag badge badge-pill badge-success font-weight-normal text-capitalize mr-2 px-2 py-1"
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
                                to="/bloglist"
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
                body
            }
            image {
                file {
                    url
                }
            }
            createdAt(formatString: "DD-MM-YYYY")
            tags
        }
    }
`;
