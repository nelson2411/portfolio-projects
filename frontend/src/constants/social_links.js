import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaStackOverflow,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/nelsonrosales24/",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/nelson2411",
  },
  {
    id: 4,
    icon: <FaStackOverflow className="social-icon"></FaStackOverflow>,
    url: "https://stackoverflow.com/users/11797301/nelson-rosales",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/NelsonRosales27",
  },
]

export default data
