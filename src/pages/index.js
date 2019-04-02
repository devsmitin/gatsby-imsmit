import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import headGraphic from "../images/undraw_creation_rd0e.svg";
import bioGraphic from "../images/undraw_responsive_6c8s.svg";

const IndexPage = () => (
	<Layout>
		<SEO
			title="Front-end Developer &amp; Designer"
			keywords={[
				`Front-end`,
				`Developer`,
				`Designer`,
				`Gatsby Developer`
			]}
		/>
		<header className="py-3 bg-header">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<img
							src={headGraphic}
							alt="Creator"
							className="img-fluid my-5"
						/>
					</div>
					<div className="col-md-6 offset-md-1 d-flex align-items-center">
						<div className="content">
							<h1>Hi, I'm Smit.</h1>
							<p className="lead font-weight-bold mb-md-0 hover-text">
								I'm a Front-end <span>Developer</span>,{" "}
								<span>Designer</span>, & <span>Superman</span>{" "}
								from Ahmedabad, India.{" "}
								<span className="hover-text-hidden">
									(...ok not really{" "}
									<span role="img" aria-label="smiley">
										😆
									</span>
									)
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
		<section className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-5 order-md-1 offset-md-1">
						<img
							src={bioGraphic}
							alt="Creator"
							className="img-fluid my-5"
						/>
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<div className="content">
							<p className="lead font-weight-normal hover-text">
								I love all things about web development &
								design. I have active or passive participation
								in making of <span>120+</span> ordinary
								websites, but I also like to explore latest tech
								for web development.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
