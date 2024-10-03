import Herosec from "../../compon/Herosec";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
export default function Contact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <Herosec title="Contact Us" subtitle="Chek off Pricing & plangs" />
        
          <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="enter your full  name" />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="enter your email adress"
              />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="enter your phone number" />
            </Col>
            </Row>
          </Form>
        
        <Row>
          <Col sm={12}>
            <Form.Control
              as="textarea"
              placeholder="enter your masseage here"
            />
          </Col>
        </Row>
        <div className="btn-holder">
          <a href="#" className="btn btn-primary">
            {" "}
           send now
          </a>
        </div>
      </Container>
      <div className="google-map" style={{marginTop:"10px"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.5322834257!2d36.20049408552258!3d33.507448225272874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syri%C3%AB!5e0!3m2!1snl!2snl!4v1727897053061!5m2!1snl!2snl"  allowfullscreen="" loading="lazy" >
      </iframe>
      </div>
    </section>
  );
}
