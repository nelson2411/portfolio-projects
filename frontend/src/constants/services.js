import React from "react"
import { FaCode, FaReact } from "react-icons/fa"
import { DiGoogleAnalytics } from "react-icons/di"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `My experience includes building websites for small businesses in a variety of industries. Bring your ideas to life with HTML/CSS and Javascript. With me, you'll get a complete solution to your project, from domain management to coding to hosting. .`,
  },
  {
    id: 2,
    icon: <DiGoogleAnalytics className="service-icon" />,
    title: "Analytics",
    text: `Would you like to know how to tailor your marketing strategies? Using Google analytics, I can provide insights into what your audience is looking for on your website. Additionally, organic SEO is included. 
.`,
  },
  {
    id: 3,
    icon: <FaReact className="service-icon" />,
    title: "React Web-Apps",
    text: `Are you looking for a ReactJs developer to join your team. Feel free to contact me. My experience included React 16+, NextJs and Gatsby. 
    I am confortable working with SASS, Styled-components and Material UI.`,
  },
]

export default services
