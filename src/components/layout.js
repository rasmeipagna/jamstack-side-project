import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "@wordpress/block-library/build-style/style.css"
import "../css/header.css"
import "../css/style.css"
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from "./Menu"
import Footer from "./Footer"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
     query {
       wpgraphql {
         generalSettings {
           title
           url
         }
         menu(id: "dGVybToxNg==") {
                       menuItems {
                        nodes {
                           id
                           label
                           url
                         }
                       }
                     }
       }
     }
   `)

  const { title, url } = data.wpgraphql.generalSettings
  // loop through the menu items and make the links relative
  const items = data.wpgraphql.menu.menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, ""),
  }))
  return (
    <>
      <header>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jamstack Wordpress Sup'Biotech</title>
        </Helmet>

        <nav id="banner">
            <div class="content-banner">
                <ul class="ul-banner">
                    <li><a href="https://www.supbiotech.fr/admissions-ecole-ingenieur/venir-nous-rencontrer">Nous rencontrer</a></li>
                    <li><a href="https://www.supbiotech.fr/contact">Contact</a></li>
                </ul>
                
                    <ul class="logo-reseaux">
                        <li><a class="facebook" href="https://www.facebook.com/supbiotech"></a></li>
                        <li>
                            <a class="twitter" href="https://twitter.com/supbiotech"></a>
                        </li>
                        <li><a class="youtube" href="https://www.youtube.com/user/supbiotech"></a></li>
                        <li><a class="insta" href="https://www.instagram.com/supbiotech/"></a></li>
                    </ul>
                </div>
        
        </nav>

        <Menu></Menu>

      </header>

      <main>{children}</main>


      <Footer></Footer>
    </>
  )
}

export default Layout