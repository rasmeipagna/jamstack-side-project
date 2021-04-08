import React from "react"
import { Nav, NavDropdown, Col, Container } from 'react-bootstrap'

const MenuItem = ({ menuItem, wordPressUrl }) => {
    return (
     
      <NavDropdown title={menuItem.label} id="basic-nav-dropdown" href="{CreateLocalLink(menuItem, wordPressUrl)}">
        
        {/* <Link style={{marginLeft: menuItem.parentId == null ? '20px': '40px' }} to={CreateLocalLink(menuItem, wordPressUrl)}>{menuItem.label}</Link> */}
<Container>
        <Col sm={5} className="left-menu">
        <ul>
        {
          
          menuItem.children.map((menuItem) => (
           
            
            <li><Nav.Link key={menuItem.id} menuItem={menuItem} href={menuItem.path}>{menuItem.label}</Nav.Link></li>           
            
          ))
          
        }
        </ul>
</Col>

<Col sm={7} className="right-menu">
  <div className="contact-clic hpDesktop">
    <a className="documentation" href="">Documentation</a>
    <a className="candidature" href="">Candidature</a>
    <a className="entretien" href="">Agenda</a>
    <a className="rdvperso" href="">RDV<br />personnalisé</a>
  </div>

  <div className="jpo">
    <p><span>Venez nous rencontrer</span></p>
    <p className="displayParisHeader"></p>
  </div>
  
  </Col> 
</Container>
        </NavDropdown>
       
    )
}

export default MenuItem