import React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle, menuLinks }) => (
  <nav className="navbar navbar-expand navbar-light bg-white sticky-top">
    <div className="container">
      <Link className="navbar-brand font-weight-bolder text-success" to={"/"}>
        {siteTitle}
      </Link>
      <ul className="navbar-nav ml-auto">
        {menuLinks.map(link => (
          <li key={link.name} className="nav-item">
            <Link className="nav-link text-dark" to={link.link}>
              {" "}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Header;
