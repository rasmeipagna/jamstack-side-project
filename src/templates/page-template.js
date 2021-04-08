import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Jpo from '../components/WidgetJpo'
import Video from '../components/WidgetVideo'
//import Forms from '../components/formation'
import { Col, Row} from "react-bootstrap"
import Breadcrumb  from '../components/Breadcrumb'


export const query = graphql`
   query($id: ID!) {
     wpgraphql {
       page(id: $id) {
         title
         content 
         seo {
          breadcrumbs {
            text
            url
          }
        }       
       }
       generalSettings {
        url
      }
     }
   }
 `

const PageTemplate = ({ data }) => {
  const page = data.wpgraphql.page
  
  return (

    <Layout>
      <section className="container page">
        <Col md={12}>
          <div className="App container">
      <Breadcrumb siteUrl={ data.wpgraphql.generalSettings.url} crumbs={ page.seo.breadcrumbs }   />
    </div>

          
          
        </Col>
        <Row>
        <Col md={8}>
          {/* <h1 dangerouslySetInnerHTML={{ __html: page.title }} /> */}
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </Col>
        <Col md={4} className="widgets">
          {/* <h2>Les widgets</h2> */}

        <Jpo></Jpo> 
         <Video></Video>

        {/*<Forms></Forms>*/}
        
        </Col>
        </Row>
      </section>
    </Layout>

  )
}

export default PageTemplate