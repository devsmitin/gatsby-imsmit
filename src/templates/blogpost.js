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
                <div className="blogpost py-5">
                    <h1 className="font-weight-bolder mb-3">{title}</h1>
                    <img
                        className="img-fluid mb-3"
                        alt={title}
                        src={image.file.url}
                    />
                    <p className="body-text">{body.body}</p>

                    <ul className="tags list-unstyled">
                        {tags.map(tag => (
                            <li
                                className="tag badge badge-pill badge-secondary mr-2"
                                key={tag}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>

                    <div className="clearfix">
                        <Link
                            className="d-block float-md-left text-success font-weight-bold"
                            to="/blogposts"
                        >
                            View more posts
                        </Link>
                        <Link
                            className="d-block float-md-right text-success font-weight-bold"
                            to="/"
                        >
                            Back to Home
                        </Link>
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
            tags
        }
    }
`;
