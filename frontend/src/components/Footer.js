import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <h4>Created by Nelson Rosales</h4>
      <p>© {new Date().getFullYear()} All rights reserved</p>

      <div>
        <div className="footer-links social-links">
          {socialLinks.map((link, index) => {
            return (
              <a
                className="social-link"
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
