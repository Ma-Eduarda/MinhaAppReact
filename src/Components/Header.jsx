import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" style={{fontSize: "1.2em"}}>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;
