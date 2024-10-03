import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
import Herosec from "../../compon/Herosec";

export default function Coffee() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  const coffeedata = [
    {
      id: 1,
      Image: "src/assets/images/Cappuccino.jpg",
      title: "Double Espresso (Doppio)",
      description: "A ristretto is an espresso",
      link: "https://www.google.com",
    },
    {
      id: 2,
      Image: "src/assets/images/cafe-latte.jpg",
      title: " Short Macchiato",
      description: " website and dashboard",
    },
    {
      id: 3,
      Image: "src/assets/images/cafe-latte.jpg",
      title: " Long Macchiato",
      description: "(aka “americano”)",
    },
    {
      id: 4,
      Image: "src/assets/images/mocha-coffee.jpg",
      title: " Ristretto",
      description: "(aka “short black”)",
    },
    {
      id: 5,
      Image: "src/assets/images/istockphoto-1887088654-612x612.jpg",
      title: " Long Black (Americano)",
      description: "(aka “Doppio”)",
    },
    {
      id: 6,
      Image: "src/assets/images/short-macchiato.jpg",
      title: "Espresso(ShortBlack)",
      description: "A long macchiato",
    },
  ];
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <Herosec title="Our Coffee" subtitle=" 13 Different Types Of Coffee Explained By A Barista"/>
       
        <Row className="portfoliolist">
          {coffeedata.map((coffee) => {
            return (
              <Col key={coffee.id} sm={4}>
                <div className="portfolio-wrapper">
                  <a href={coffee.link}>
                    <Image src={coffee.Image} />
                    <div className="label text-center">
                      <h3>{coffee.title}</h3>
                      <p>{coffee.description}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
    </section>
  );
}
