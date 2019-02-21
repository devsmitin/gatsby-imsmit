import React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle, menuLinks }) => (
	<nav className="navbar navbar-light bg-light">
		<ul className="navbar-nav">
			{menuLinks.map(link => (
				<li key={link.name} className="nav-item">
					<Link className="nav-link" to={link.link}>
						{" "}
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default Header;
