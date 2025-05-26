import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const Main = () => {
    return (
        <main>
            <div
                style={{maxWidth: "800px", margin: "2em auto", marginTop: "50px", marginBottom: "50px"}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src={img1}
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
                            src={img2}
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
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <section
                style={{marginTop: "50px", textAlign: "center", maxWidth: "800px", marginLeft: "auto", marginRight: "auto", padding: "0 1em", fontSize: "1em"}}>
                <hr />

                <h2 style={{ fontSize: "2rem", marginBottom: "1em" }}>About us</h2>
                <p style={{ lineHeight: "1.6" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel
                    reiciendis dolorem vero soluta accusamus, natus voluptatem impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                    voluptas ipsa saepe sunt! Ullam nesciunt, ad voluptas sequi quae
                    voluptate veritatis officiis laboriosam! Maxime ex fuga ad nemo
                    commodi sapiente! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.
                </p>

                <br />

                <p style={{ lineHeight: "1.6" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                    voluptatibus fugit quas, voluptatum mollitia repudiandae omnis, maxime
                    aliquid iure illo officiis? Est quidem modi nostrum necessitatibus
                    corporis, voluptates nesciunt. Totam? Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Quae, neque labore! Sed, earum. Ducimus,
                    facere consequatur repellendus expedita libero ab cumque beatae
                    tempore laborum dicta. Reprehenderit exercitationem minima accusamus
                    velit!
                </p>
                <hr />
            </section>
            
            <br />

        </main>
    );
};

export default Main;
