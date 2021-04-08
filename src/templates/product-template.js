// import React from "react"
// import { graphql } from "gatsby"
// import Layout from '../components/layout'

// export const query = graphql`
// query($id: ID!) {
//   wpgraphql {
//     products(id: $id) {
//       ... on WPGraphQL_SimpleProduct {
//       edges {
//         node {
//           id
//           name
//           description
//           link
//           attributes {
//             edges {
//               node {
//                 name
//                 label
//                 options
//               }
//             }
//           }
//           galleryImages {
//             nodes {
//               sourceUrl
//             }
//           }
//           productCategories {
//             nodes {
//               name
//               description
//             }
//           }
//           image {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
// }
// }
// `

// const ProductTemplate = ({ data}) => {
//   const products = data.wpgraphql.products.edges.node
//   return (
//          <Layout>
//            <h1 dangerouslySetInnerHTML={{ __html: products.edges.node.name }} />
//            <div dangerouslySetInnerHTML={{ __html: products.edges.node.description }} />
//            <Link
//               to={`/blog/${post.uri}`}
//               dangerouslySetInnerHTML={{ __html: products.edges.node.link }}
//             />
//          </Layout>
//        )
// }

// export default ProductTemplate