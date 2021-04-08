/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    {
             resolve: 'gatsby-source-graphql',
             options: {
               typeName: 'WPGraphQL',
               fieldName: 'wpgraphql',
               url: 'http://supbio.flywheelsites.com/graphql',
             }
            },
            {
              resolve: `gatsby-plugin-less`,
              options: {
                cssLoaderOptions: {
                  camelCase: false,
                },
              },
            },
            
  ]
}
