/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "NR - Full-Stack Portfolio",
    description: "Full Stack Web Developer portfolio",
    keywords: "gatsbyjs, javascript, react, css, recipes, El Salvador",
    author: "Nelson Rosales",
    titleTemplate: "%s · NR - Portfolio",
    url: "https://timely-tulumba-334750.netlify.app/",
    twitterUsername: "@NelsonRosales27",
    image: "/imgMain.jpg",
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    /* install gatsby plugin for strapi v3 */
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://portfolio-strapi-backend311022.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
  ],
}
