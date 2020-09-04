module.exports = {
  siteMetadata: {
    title: `In The Fight`,
    description: `In The Fight Norht Brooklyn`,
    author: `@fridaland`,
    menuLinks: [
      {
        name: `Contact`,
        url: `/contact`,
      },
      {
        name: `Events`,
        url: `/events`,
      },
      {
        name: `Resources`,
        url: `/resources`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    }
  ],
}
