import React from "react";

// import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPageB = () => (
	<main>
		<SEO title="Good Bye!" keywords={[`gatsby`, `application`, `react`]} />
		<header className="py-5 bg-light border-bottom border-dark">
			<div className="container">
				<h1 className="display-4">
					Hello, <del>World</del> Dots!
				</h1>
			</div>
		</header>
		<section className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<h2 className="mb-5">Time to say goodbye!</h2>
						<div className="card card-body shadow border-dark rounded-0">
							<p className="lead font-weight-normal">
								Hope you're all doing great.
							</p>
							<p className="lead font-weight-normal">
								After a couple of years filled with burgers,
								pizzas, excitement and some really hard work,
								today I'll leave <b>Multidots</b> to focus on
								other priorities and goals. I had great time
								here and I believe it wouldn't have been this
								great anywhere else - Thank you all for letting
								me be a part of 'Dots family'!
							</p>
							<p className="lead font-weight-normal">
								What I found here is a great working environment
								and some life-long memories, which I dont know I
								will experience ever. Being a part of Front-end
								team got complete new meaning since Amin took
								charge as a team lead. I believe team will
								sustain this identity for long.
							</p>
							<p className="lead font-weight-normal">
								I would like to mention those who has been there
								since very starting: Priyanka Behra and Juhi
								Trivedi. I've learnt so many things from both of
								you. Lately Rohit Gupta and Shashank Panchal. I
								will miss all of you a lot - as a team, friends
								and as a family, too.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
);

export default IndexPageB;
