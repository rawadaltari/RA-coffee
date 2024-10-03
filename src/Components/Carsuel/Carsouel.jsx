import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Herodata = [
  {
    id: 1,
    Image: "src/assets/images/22.jpg",
    title: " RaCoders heigt quality",
    description:
      "go to location company and intership to go first employee and plus to experince",
    btntext: "Get started",
  },
  {
    id: 2,
    Image: "src/assets/images/pexels-fauxels-3183150.jpg",
    title: "The RaCoders company ",
    description:
      "go to location company and intership to go first employee and plus to experince its very heigt quality and vist ypur website and dashboard",
    btntext: "New Order",
  },
  {
    id: 3,
    Image: "src/assets/images/pexels-fauxels-3184291.jpg",
    title: "Coffee is very healthy ",
    description:
      "go to location company and intership to go first employee and plus to in javascripts react recomnded a componnet experince",
    btntext: "Join Now",
  },
  {
    id: 4,
    Image: "src/assets/images/pexels-fauxels-3184360.jpg",
    title: "Go to first Order",
    description:
      "go to location company and intership to go first employee and plus to experince",
    btntext: "Read more",
  },
];
export default function Carsouel() {
  return (
    <section className="hero-block" id="home">
      <Carousel>
        {Herodata.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <Image src={hero.Image} style={{ height: "630px" }} />
              <Carousel.Caption>
                <h3
                  style={{ fontSize: "50px", fontWeight: "200", color: "#fff" }}
                >
                  {hero.title}
                </h3>
                <p
                  style={{
                    color: "gray",
                    fontSize: "25px",
                  }}
                >
                  {hero.description}
                </p>
                <Button variant="secondary" style={{backgroundColor:"rgb(106, 59, 5)", color:"white"}}>{hero.btntext}</Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
