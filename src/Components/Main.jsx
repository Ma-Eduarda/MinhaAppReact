import Carousel from "react-bootstrap/Carousel";

const Main = () => {
    return (
        <main>
            <div style={{maxWidth: "800px", margin: "2em auto", marginTop: "50px" }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src="src/images/img1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src="src/images/img2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src="src/images/img3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </main>
    );
};

export default Main;
