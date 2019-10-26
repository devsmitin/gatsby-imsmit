import React from "react"

const Footer = ({ authorName, footerLinks }) => (
  <footer className="py-5 bg-dark text-white">
    <div className="container">
      <div className="clearfix">
        <p className="text-center font-weight-bold text-sm-left float-sm-left mb-3">
          With{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by {authorName}
        </p>
        <ul className="list-inline text-center font-weight-bold text-sm-right float-sm-right">
          {footerLinks.map(link => (
            <li key={link.name} className="list-inline-item">
              <a
                href={link.link}
                className="text-theme"
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center mb-0">Built with Gatsby</p>
    </div>
  </footer>
)

export default Footer
