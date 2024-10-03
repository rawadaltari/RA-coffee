import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Herosec from "../../compon/Herosec";
export default function Teams() {
  const Team = [
    {
      id: 1,
      Image: "src/assets/images/team1.webp",
      name: "jony alpha",
      description: "A ristretto is an espresso",
      Fblink: "https://www.google.com",
      linkedlink: "https://www.google.com",
      instalink: "https://www.google.com",
      designation: "depart manger",
    },
    {
      id: 2,
      Image: "src/assets/images/team2.webp",
      name: "  Rola exlas",
      Fblink: "https://www.google.com",
      linkedlink: "https://www.google.com",
      instalink: "https://www.google.com",
      description: " website and dashboard",
      designation: "manger",
    },
    {
      id: 3,
      Image: "src/assets/images/team3.jpg",
      name: " gerna flabs",
      Fblink: "https://www.google.com",
      linkedlink: "https://www.google.com",
      instalink: "https://www.google.com",
      description: "(aka “americano”)",
      designation: "Acounting",
    },
    {
      id: 4,
      Image: "src/assets/images/team4.jpg",
      name: " rawad pured",
      Fblink: "https://www.google.com",
      linkedlink: "https://www.google.com",
      instalink: "https://www.google.com",
      description: "(aka “short black”)",
      designation: "programing",
    },
    {
      id: 5,
      Image: "src/assets/images/team9.webp",
      name: " angel bar",
      Fblink: "https://www.google.com",
      linkedlink: "https://www.google.com",
      instalink: "https://www.google.com",
      description: "(aka “Doppio”)",
      designation: "marketing",
    },
    {
      id: 6,
      Image: "src/assets/images/team11.webp",
      name: "qurta bas",
      Fblink: "https://www.google.com",
      linkedlink: "https://www.google.com",
      instalink: "https://www.google.com",
      description: "A long macchiato",
      designation: "Seo search",
    },
    {
      id: 7,
      Image: "src/assets/images/team7.jpeg",
      name: "mhd alkawas",
      Fblink: "https://www.google.com",
      linkedlink: "https://www.google.com",
      instalink: "https://www.google.com",
      description: "A long macchiato",
      designation: "Sales",
    },
    {
      id: 8,
      Image: "src/assets/images/team8.webp",
      name: "Espresso(ShortBlack)",
      Fblink: "https://www.google.com",
      linkedlink: "https://www.google.com",
      instalink: "https://www.google.com",
      description: "isma ahmad",
      designation: "marketing",
    },
  ];
  return (
    <section id="teams" className="teams teams-block">
      <Container fluid>
        <Herosec title="Our team" subtitle="Team of company RACoffee" />

        <Row>
          {Team.map((tem) => {
            return (
              <Col key={tem.id} sm={3}>
                <div className="image">
                  <Image src={tem.Image} />

                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={tem.Fblink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={tem.instalink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={tem.linkedlink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
                <div className="content">
                      <h3 style={{ color: "brown", fontFamily: "roboto" }}>
                        {tem.name}
                      </h3>
                      <span className="designation">{tem.designation}</span>
                      
                    </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
