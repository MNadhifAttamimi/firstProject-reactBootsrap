// Import
import Carousel from "react-bootstrap/Carousel";
import logo1 from "./../assets/logo1.jpeg";

// Hero
const Hero = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={logo1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Punk</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={logo1} alt="Second slide" />

                <Carousel.Caption>
                    <h3>Emo</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={logo1} alt="Third slide" />

                <Carousel.Caption>
                    <h3>Preman</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={logo1} alt="Third slide" />

                <Carousel.Caption>
                    <h3>Pingiran</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Hero;
