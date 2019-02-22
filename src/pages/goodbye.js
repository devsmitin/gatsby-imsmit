import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPageB = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Hi people</h1>
		<p>Welcome to my Gatsby site.</p>
	</Layout>
);

export default IndexPageB;
