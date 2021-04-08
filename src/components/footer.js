import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {

  return (


    <footer>
      <Container>
        <Row sm={12} className="propos">

          <Col sm={5} className="apropos rel" >
            <h3>À propos</h3>
            <p>Sup'Biotech est une <a href="">école d’ingénieur·e·s spécialisée en biotechnologies à Paris et à Lyon,</a> proche du monde de la <a href="">Recherche</a> comme du monde de l'<a href="">Entreprise</a>, qui propose une <a href="">formation innovante en 5 ans après le bac</a>. Ce cursus permet aux étudiants d'accéder rapidement à des postes à responsabilités, en France comme à l'<a href="">International</a>, dans les secteurs très porteurs de la <a href="">santé et la pharmacie</a>, de <a href="">l’innovation agroalimentaire</a>, de la <a href="">cosmétique</a>, de la <a href="">bio-informatique</a> ou encore de l'<a href="">environnement</a>. Les études, combinant fondamentaux académiques, <a href="">projets étudiants</a> et <a href="">stages en entreprise</a>, sont découpées en deux parties selon la norme européenne : le cycle <a href="">Préparatoire</a> et le cycle <a href="">Ingénieur</a>.  la formation des ingénieur·e·s en biotechnologies de Sup'Biotech est <a href="">labellisée par Medicen Paris Région et Industries and Agro-Ressources (I.A.R.)</a>.<br /> Sup’Biotech propose également une <a href="">filière apprentissage</a> à partir de bac+3, ainsi qu’une formation Bachelor en Biotechnologies, accessible après le bac. <br /> Sup’Biotech est un établissement d’enseignement supérieur privé habilité à délivrer le <a href="">titre d’ingénieur</a> et reconnu par l’État (arrêté du 15/12/14 et B.O du 08/01/15).</p>



          </Col>
          <Col sm={3} className="logo-cti">
            <ul>
              <li><img src={require('../assets/images/design/cti-logo.jpg')} /></li>
              <li><img src={require('../assets/images/design/logo-iar.png')} /></li>

            </ul>
          </Col>
          <Col sm={4} className="info-pratique">
            <h3>Infos pratiques</h3>
            <ul>
              <li><a href="">Contact</a></li>
              <li><a href="">Newsroom</a></li>
              <li><a href="" target="_blank">Revue de Presse</a></li>
              <li><a href="">Plan du site</a></li>
              <li><a href="">Mentions légales</a></li>

              <li><a href="#" onclick="window.Sddan.cmp.displayUI();return false;">Politique de cookies</a></li>
              <li><a href="">Politique de confidentialité</a></li>
              <li><a href="">C.G.V</a></li>
              <li><a href="">Agenda</a></li>
            </ul>
            <div className="logo-reseaux">
              <a class="facebook" href="https://www.facebook.com/supbiotech"></a>
              <a class="twitter" href="https://twitter.com/supbiotech"></a>
              <a class="youtube" href="https://www.youtube.com/user/supbiotech"></a>
              <a class="insta" href="https://www.instagram.com/supbiotech/"></a>
              <a class="linkedin" href="https://www.linkedin.com/edu/sup'biotech-%C3%A9cole-de-biotechnologies-43565"></a>
            </div>

          </Col>

        </Row>
        <div class="clearfix"></div>
        <Row className="justify-content-md-center">

          <Col sm={4} className="">
            <h3>Venez nous rencontrer</h3>
          </Col>
          <Col sm={8} className="vousetes">
            <div class="inner">

              <a className="documentation" href="">
                Documentation
</a>
              <a className="candidature" href="">
                Candidature
</a>
              <a className="agenda" href="">
                Agenda
</a>

              <a className="rdvperso" href="">
                RDV personnalisé
</a>
            </div>
            <div class="clearfix"></div>
          </Col>


        </Row>

      </Container>
      <Row className="container ecoles">

        <Col sm={12}>
          <p>
            Établissement privé d'enseignement supérieur technique - Inscription au rectorat de Créteil - Sup'Biotech est membre de <a href="https://www.ionis-group.com" rel="nofollow" title="enseignement supérieur privé" target="_blank">IONIS Education Group</a> comme :
             </p>
        </Col>
      </Row>
    </footer>






  )
}

export default Footer