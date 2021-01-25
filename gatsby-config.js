const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  siteMetadata: {
    // edit below
    title: `Growing Family Fun`,
    description: `Una familia que quiere hablar sobre lo que creemos y como nuestras experiencias nos han llevado a hablar sobre lo que nos interesa`,
    siteUrl: `https://growingfamily.fun`,
    social: {
      instagram: `growingfamilyfun`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-58305221-3`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Growing Family Fun`,
        short_name: `GFF`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gff-icon.png`,
      },
    },
  ],
};
