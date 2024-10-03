import Container from "react-bootstrap/Container";
import Herosec from "../../compon/Herosec";
import Carousel from "react-bootstrap/Carousel";
export default function Testmonition() {
  const Miniton = [
    {
      id: 1,
      name: "Jony alpha",
      description: "A ristretto is an espresso website and dashboard",
      designation: "depart manger",
    },
    {
      id: 2,
      name:"Rawad qadar",
      description: " website and dashboard programing (Firest employy)",
      designation: "manger",
    },
    {
      id: 3,
      name: "Mary sead",
      description: "A ristretto is an espresso Seo search",
      designation: "marketing",
    },
  ];
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <Herosec
          title="client mintion"
          subtitle="-- two espresso shots in one cup--"
        />
        <Carousel controls={false}>
            {Miniton.map(mino =>{
                return(
                    <Carousel.Item key={mino.id}>
                    <blockquote>
                      <p>{mino.description}</p>
                      <cite>
                        <span className="name">{mino.name}</span>
                        <span className="designation">{mino.designation}</span>
                      </cite>
                    </blockquote>
                  </Carousel.Item>
                );
            })}
         
        </Carousel>
      </Container>
    </section>
  );
}
