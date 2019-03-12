import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Image from "../components/image";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <header className="py-5 bg-header">
            <div className="container">
                <h1 className="font-weight-bolder mb-4">
                    Welcome to my Gatsby site!
                </h1>
                <img
                    className="img-fluid rounded featured-img"
                    alt="Featured Img"
                    src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1630&q=80"
                />
            </div>
        </header>
    </Layout>
);

export default IndexPage;
