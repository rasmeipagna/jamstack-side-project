import React from "react"
import { graphql, useStaticQuery } from "gatsby"

      const Video = () => {
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
            widget(id: "cG9zdDoxNjc=") {
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
            {/* <h2 dangerouslySetInnerHTML={{ __html: title }} /> */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {/* <a dangerouslySetInnerHTML={{ __html: link }} /> */}
            
          </div>
        )
       }


     export default Video