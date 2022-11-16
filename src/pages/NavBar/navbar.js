import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

  return (
    <Navbar className='bg-primary text-white' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Pagina de Anime</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Drop Down" id="navbarScrollingDropdown">
              <NavDropdown.Item href='teste 1'>Teste</NavDropdown.Item>
              <NavDropdown.Item href="teste 2">
                Teste 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Teste 2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Botão desabilitado
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;