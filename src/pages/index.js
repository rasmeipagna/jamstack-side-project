import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import {Col} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
/*import Formation from "../components/formation"*/
/**
 * Parses a menu item object and returns Gatsby-field URI.
 *
 * @param {object} menuItem a single menu item
 * @param wordPressUrl
 * @param blogURI
 */

export const CreateLocalLink = (menuItem, wordPressUrl, blogURI='blog/') => {
  const { url, connectedObject } = menuItem;

  if (url === '#') {
    return null;
  }
  /**
   * Always want to pull of our API URL.
   */
  let newUri = url.replace(wordPressUrl, '');

  /**
   * If it's a blog link, respect the users blogURI setting.
   */
  if (connectedObject && connectedObject.__typename === 'WPGraphQL_Post') {
    newUri = blogURI + newUri;
  }

  return newUri;
};

export const query = graphql`
query {
  wpgraphql {
    sliders {
      edges {
        node {
          slider {
            titre
            description
            fieldGroupName
            image {
              title
              sourceUrl
              description
            }            
          }
        }
      }
    }
  }
}
`
 
const Home = ({data}) => {

      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
      };
      //const slide = data.wpgraphql.sliders.nodes.sliderql
      const datasliders = data.wpgraphql.sliders.edges

        console.log(datasliders)
        return (
          <Layout>
            <section className="home-title">
              <div className="container rel">
                <div className="crop-circle">
                  <h1>L'école <strong>des ingénieur·e·s</strong><br />en biotechnologies</h1>
                  <span class="petit">
                    <a href="https://www.cti-commission.fr/">
                    <img src={require('../assets/images/design/cti-logo.jpg')} />
                    </a>
                  </span>
                  <span className="petitText">
                  L’institut supérieur des biotechnologies<br />
de Paris (Sup’Biotech) est reconnu par<br />
l’état et délivre un diplôme d’ingénieur<br />
habilité par la CTI 
                  </span>
                </div>
                <div className="jphome">
                  <p className="titleBulle">Venez nous rencontrer</p>
                </div>
                <div className="contact-clic hpDesktop">
                  <a className="documentation" href="">Documentation</a>
                  <a className="candidature" href="">Candidature</a>
                  <a className="entretien" href="">Agenda</a>
                  <a className="rdvperso" href="">Rdv<br />personnalisé</a>
                </div>
              </div>
            </section>
        <section className="container page">
           <Col md={12}>   
        <Slider {...settings}>


       {datasliders.map(dataslider => (
        <div key={dataslider}>
          <h3 >{ dataslider.node.slider.titre }</h3>
          <p>{dataslider.node.slider.description}</p>
          <img src={dataslider.node.slider.image.sourceUrl} alt="Logo" />
          
        </div>
      ))}
      </Slider>

      </Col>
      </section>

      {/*<Formation></Formation>*/} 

      </Layout>
        )
  }
 
  export default Home