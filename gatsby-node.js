exports.createPages = async ({ actions, graphql }) => {
  // query for WordPress page data
  const result = await graphql(`
  {
      wpgraphql {
        pages(first:1000){
          nodes {
            id
            uri       
          }
        }
        posts(first:1000) {
          nodes {
          id
          uri
          }
        }

      }
    }
  `)

  // pull the page data out of the query response
  const pages = result.data.wpgraphql.pages.nodes

  // loop through WordPress pages and create a Gatsby page for each one
  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve("./src/templates/page-template.js"),
      context: {
        id: page.id,
      },
    })
  })
  const posts = result.data.wpgraphql.posts.nodes

 posts.forEach(post => {
  actions.createPage({
     path: `blog/${post.uri}`,
     component: require.resolve("./src/templates/post-template.js"),
    context: {
      id: post.id,
     },
   })
 })
 
}
