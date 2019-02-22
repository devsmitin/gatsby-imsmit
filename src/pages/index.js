import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<header className="py-5 bg-light border-bottom border-dark">
			<div className="container text-center">
				<h1 className="display-4">Hello, World!</h1>
			</div>
		</header>
		<section className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<h2 className="mb-5">Time to say goodbye!</h2>
						<div className="card card-body shadow border-dark rounded-0">
							<p className="lead font-weight-normal">
								Hope all you're doing great.
							</p>
							<p className="lead font-weight-normal">
								After a couple of years filled with burgers,
								pizzas, excitement and some really hard work,
								today I'll leave <b>Multidots</b> to focus on
								other priorities. I had great time here and I
								believe it wouldn't have been this great
								anywhere else - Thank you all for letting me be
								a part of a 'Dots family'!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
