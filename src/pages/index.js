import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<header className="bg-secondary text-white py-5">
			<div className="container py-5">
				<h1 className="display-1">Welcome</h1>
			</div>
		</header>
		<section className="bg-light">
			<div className="container py-5">
				<h2>Section title</h2>
				<p className="lead">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Excepturi vero ad nulla repellendus ipsum. Voluptatum magnam
					dignissimos natus, placeat hic officiis, voluptas,
					repellendus sequi cum ratione rerum ut inventore temporibus.
				</p>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
