import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <header className="py-5">
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
        <section className="py-5">
            <div className="container">
                <h2 className="mb-3">Section title</h2>
                <div className="row">
                    <div className="col-md-4 order-md-1">
                        <Image />
                    </div>
                    <div className="col-md-8">
                        <p className="lead">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Excepturi vero ad nulla repellendus ipsum.
                            Voluptatum magnam dignissimos natus, placeat hic
                            officiis, voluptas, repellendus sequi cum ratione
                            rerum ut inventore temporibus.
                        </p>
                        <p className="lead">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Excepturi vero ad nulla repellendus ipsum.
                            Voluptatum magnam dignissimos natus, placeat hic
                            officiis, voluptas, repellendus sequi cum ratione
                            rerum ut inventore temporibus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default IndexPage;
