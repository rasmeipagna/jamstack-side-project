import React from "react"
import { graphql, useStaticQuery } from "gatsby"

      const Jpo = () => {
        const data = useStaticQuery(graphql`
        query{
          wpgraphql {
            node {
              id
            }
            widgets {
              nodes {
                content
                id
                link
                slug
                title
                widgetId
              }
            }
            widget(id: "cG9zdDoxNjQ=") {
             content
             link
             title
             id
             widgetId
           }
          }
        }
        ` )

        const { content,link, title } = data.wpgraphql.widget
        console.log(data.wpgraphql)
        return (
          
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {/* <a dangerouslySetInnerHTML={{ __html: link }} /> */}
            
          </div>
        )
       }


     export default Jpo