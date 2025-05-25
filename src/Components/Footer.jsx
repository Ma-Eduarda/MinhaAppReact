import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-primary text-white p-3">

                    <Col md={4} className="d-flex flex-column align-items-center">
                        <Image 
                            src="https://www.shutterstock.com/image-vector/abstract-initial-letter-d-logo-600nw-2055050639.jpg"
                            alt="company logo"
                            rounded
                            width={100}
                            height={100}
                        />
                        <h4 className="mt-3">Company Name</h4>
                        <p>Company tagline here</p>
                    </Col>

                    <Col md={4} className="d-flex flex-column align-items-center">
                        <h5>Useful Links</h5>
                        <Nav className="flex-column text-center">
                            <NavLink href="#" className="text-white">Home</NavLink>
                            <NavLink href="#" className="text-white">About</NavLink>
                            <NavLink href="#" className="text-white">Products</NavLink>
                            <NavLink href="#" className="text-white">We're hiring!</NavLink>
                        </Nav>
                    </Col>

                    <Col md={4} className="d-flex flex-column align-items-center">
                        <h5>Contact us!</h5>
                        <p>email@fakeemail.com</p>
                        <p>Phone: +1(800)867-5309</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
