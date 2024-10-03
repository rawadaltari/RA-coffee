import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imgabout from "../../assets/images/pexels-chevanon-302902.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import Herosec from "../../compon/Herosec";

export default function About() {
const Cappuccino = 60;
const Caffèmocha=80;
const Coldbrewcoffee=45;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
       <Herosec title={"About Us"} subtitle={"About Our services in Ra-coffee"}/>
        <Row>
          <Col sm={6}>
            <Image src={imgabout} />
          </Col>
          <Col sm={6}>
            <p>
              “Traditionally, coffee has been seen as a bad thing,” says Marc
              Gunter, head of the section of nutrition and metabolism at the
              International Agency for Research on Cancer (IARC). “Research from
              the 1980s and 90s concluded that people who drank coffee had a
              higher risk of cardiovascular disease 
            </p>
            <p>
              Coffee has been associated with an increased risk of cancer
              because it contains acrylamide
            </p>
            <div className="Progress-block">
              <h4 style={{color:"rgb(106, 59, 5)"}}> Espresso with milk foam</h4>
              <ProgressBar now={Cappuccino} label={`${Cappuccino}%`} />
            </div>
            <div className="Progress-block">
              <h4 style={{color:"rgb(106, 59, 5)"}}>Cold brew coffee</h4>
              <ProgressBar now={Caffèmocha} label={`${Caffèmocha}%`} />
            </div>
            <div className="Progress-block">
              <h4 style={{color:"rgb(106, 59, 5)"}}>Caffè mocha</h4>
              <ProgressBar  now={Coldbrewcoffee} label={`${Coldbrewcoffee}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
