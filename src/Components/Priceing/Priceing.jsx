import Herosec from "../../compon/Herosec";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
export default function Priceing() {
    const Coffeplan =[
        {
            id: 1,
            plan:"Basic",
            price: "40 $",
            features:["Double Espresso","Short Macchiato","Free 3 order","5 pages"],
            link: "https://www.google.com",
          },
        {
            id: 1,
            plan:"premium",
            price: "80 $",
            features:["Double Espresso","Short Macchiato","Free 7 order","15 pages"],
            link: "https://www.google.com",
          },
        {
            id: 1,
            plan:"ultimate",
            price: "140 $",
            features:["Double Espresso","Short Macchiato","Free ultimate order","35 pages"],
            link: "https://www.google.com",
          },
      
    ]
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <Herosec
          title="Pricing & plangs"
          subtitle="Chek off Pricing & plangs"
        />
        <Row>
            {Coffeplan.map(pl=>{
                return(
                    <Col key={pl.id} sm={4}>
                    <div className="heading">
                      <h3>{pl.plan}</h3>
                      <span className="price">{pl.price}</span>
                    </div>
                    <div className="content">
                      <ListGroup>
                        {
                        pl.features.map((features,index) =>{
                            return(
                                <ListGroup.Item key={index}>{features}</ListGroup.Item>
                            );
                        })
                        }
                        
                      </ListGroup>
                    </div>
                    <div className="btn-holder">
                        <a href="#" className="btn btn-primary"> order now</a>
                    </div>
                  </Col>
                );

            })}
         
        </Row>
      </Container>
    </section>
  );
}
