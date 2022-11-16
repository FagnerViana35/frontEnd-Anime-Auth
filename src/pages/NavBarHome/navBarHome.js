import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarHome = () => {
  const Logout = () =>{
    localStorage.removeItem('token');
    localStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    location.assign('/login')
  }

  return (
    <Navbar className='bg-primary text-white' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Página de Anime</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Drop Down" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Testes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Teste 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Teste 2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Botão Desabilitado
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='mx-4 text-white'variant="outline-success" style={{background:'green', color:''}}>Search</Button>

            <Button className='mx-4 bg-dark' onClick={Logout}>Logout </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarHome;