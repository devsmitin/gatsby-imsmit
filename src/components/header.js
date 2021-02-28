import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, menuLinks }) => (
  <nav className="navbar navbar-expand navbar-light bg-white fixed-tops py-5">
    <div className="container">
      <Link
        className="navbar-brand font-weight-bold display-font text-theme"
        to={"/"}
      >
        {siteTitle}
      </Link>
      <ul className="navbar-nav">
        {menuLinks.map(link => (
          <li key={link.name} className="nav-item">
            <Link className="nav-link font-weight-bold" to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <a href="https://dev.to/imsmit" className="" target="_blank">
            <img
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Smit Modi's DEV Profile"
              height="40"
              width="40"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
