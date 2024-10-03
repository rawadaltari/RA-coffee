import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarTop.css";
export default function NavbarTop() {
  const links = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Services",
    },
    {
      id: 4,
      title: "Contact us",
    },
    {
      id: 5,
      title: "Blog",
    },
    {
      id: 6,
      title: "Freeservices",
    },
    {
      id: 7,
      title: "Product",
    },
  ];
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="Navtop">
          Ra-Coffee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="  Navitem"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {links.map((lin) => {
              return (
                <Nav.Link key={lin.id} href="#action1" className="navlnk">
                  {lin.title}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
