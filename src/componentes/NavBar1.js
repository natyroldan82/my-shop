import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../componentes/CartWidget/index';
//import { NavLink } from 'react-router-dom';
 function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo principal"
              src="../APPLE_icon.svg"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{' '}
          
          Tienda Apple 
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="/">nati</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Iphone</Nav.Link>
            <Nav.Link href="/categoria">Accesorios</Nav.Link>
            <Nav.Link href="/servicio">Servicios Técnico</Nav.Link>
            <CartWidget></CartWidget>
            
          </Nav>
         
        </Container>
       
      </Navbar>
      
    </>
  );
}

export default NavBar;