module.exports = {
  siteMetadata: {
    title: `Fullstack Nights`,
    description: `Charlas sobre technología y diseño en un ambiente informal`,
    author: `@fullstacknights`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fullstack Nights`,
        short_name: `FSN`,
        start_url: `/`,
        background_color: `#0282f8`,
        theme_color: `#0282f8`,
        display: `standalone`,
        icon: `src/images/fsn.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ]
};
