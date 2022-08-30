import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


 function Header() {
  return (
    <>
     
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../APPLE_icon.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
           Tienda Apple
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Servicios">Servicios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;