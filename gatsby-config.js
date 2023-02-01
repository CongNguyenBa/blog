/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Blog`,
    siteUrl: `http://localhost:8000`
  },
  plugins: [
    "gatsby-plugin-mdx", 
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `articles`,
      path: `${__dirname}/content/articles`,
    },
  },
  "gatsby-plugin-postcss"
],
};