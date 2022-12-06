import React from "react";
import { Container, Nav} from "react-bootstrap";
import { Navbar} from "react-bootstrap";

const Menu = () => {
    return(
        <header>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href=""> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/bebe-nina">BEBÉ NIÑA</Nav.Link>
                            <Nav.Link href="/bebe-nino">BEBÉ NIÑO</Nav.Link>
                            {/* <Nav.Link href="/accesorios">ACCESORIOS</Nav.Link> */}
                            {/* <Nav.Link href="/SALE">SALE</Nav.Link> */}      {/*TODO*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Menu;


