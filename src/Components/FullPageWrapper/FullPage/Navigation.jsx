import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cfSign from '../../../images/cf-sign.png'
import cfLogo from '../../../images/cf-logo.png'
import { useState } from 'react';

function Navigation() {
  const [navBG, setNavBG] = useState(false);
  
  function navBGcolor () {
    if(window.scrollY >=10 ){
      setNavBG(true);
    }else{
      setNavBG(false)
    }
  }
  window.addEventListener('scroll', navBGcolor);

  return (
    <div className=" nav-wrapper">
      <Navbar expand="lg" className = {navBG? 'color-white' : 'color-none'} >
      <Container>
        <Navbar.Brand href="#Home">
          <div className='d-flex logo' >
            <img src={cfSign} alt="" />
            <img src={cfLogo} alt="" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link  href="#About">About</Nav.Link>
            <Nav.Link href="#Services">Service</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Experiences">Experiences</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;