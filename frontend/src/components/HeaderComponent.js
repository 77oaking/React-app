import { Container, Nav, Navbar, NavDropdown, Badge, Form, Dropdown, DropdownButton, Button, InputGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">My First MERN App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item>Books</Dropdown.Item>
                <Dropdown.Item>Others</Dropdown.Item>
                <Dropdown.Item>Electronics</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search In Shop ..." />
              <Button variant="warning">
                <i className="bi bi-search-heart"></i>
              </Button>
            </InputGroup>

          </Nav>
          <Nav>

            <LinkContainer to="/admin/orders">
              <Nav.Link>

                <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
                Admin
              </Nav.Link>
            </LinkContainer>
            <Nav.Link >Pricing</Nav.Link>

            <NavDropdown title="Azman" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="/user/my-order" as={Link} to="/user/my-orders">My Orders</NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user-profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>

            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>
                Login
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>
                Register
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge pill bg="danger">2</Badge>
                <i className="bi bi-cart-dash"></i>
                <span className="ms-1">Cart</span>
              </Nav.Link>
            </LinkContainer>




          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}

export default HeaderComponent;