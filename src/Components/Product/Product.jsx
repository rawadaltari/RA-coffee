import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Herosec from "../../compon/Herosec";

export default function Product() {
    const TypeCoffee=[
        {
            id:1,
            title:"Espresso(ShortBlack)",
            content:"The espresso (aka “short black”) is the foundation and the most important part to every espresso based drink. So much so that we’ve written a guide on how to make the perfect espresso shot. ",
            icon:<svg  className="tcb-icon" viewBox="0 0 448 512" data-id="icon-coffee-togo-light" data-name="">
            <path d="M432 64h-16l-23.16-46.31A32 32 0 0 0 364.22 0H83.78a32 32 0 0 0-28.62 17.69L32 64H16C7.16 64 0 71.16 0 80v64c0 8.84 7.16 16 16 16h18.67l26.89 322.66C62.94 499.24 76.8 512 93.44 512h261.11c16.64 0 30.51-12.76 31.89-29.34L413.33 160H432c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16zm-77.44 416H93.44l-5.33-64h271.78l-5.33 64zm8-96H85.44L74.78 256h298.45l-10.67 128zm13.33-160H72.11l-5.33-64h314.45l-5.34 64zM416 128H32V96h19.78l32-64h280.45l32 64H416v32z"></path>
        </svg>,
        },
        {
            id:2,
            title:"Double Espresso (Doppio)",
            content:" A double espresso (aka “Doppio”) is just that -- two espresso shots in one cup. Instructions:shots of espresso in an espresso cup",
            icon:<svg  className="tcb-icon" viewBox="0 0 448 512" data-id="icon-coffee-togo-light" data-name="">
            <path d="M432 64h-16l-23.16-46.31A32 32 0 0 0 364.22 0H83.78a32 32 0 0 0-28.62 17.69L32 64H16C7.16 64 0 71.16 0 80v64c0 8.84 7.16 16 16 16h18.67l26.89 322.66C62.94 499.24 76.8 512 93.44 512h261.11c16.64 0 30.51-12.76 31.89-29.34L413.33 160H432c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16zm-77.44 416H93.44l-5.33-64h271.78l-5.33 64zm8-96H85.44L74.78 256h298.45l-10.67 128zm13.33-160H72.11l-5.33-64h314.45l-5.34 64zM416 128H32V96h19.78l32-64h280.45l32 64H416v32z"></path>
        </svg>,
        },
        {
            id:3,
            title:" Short Macchiato",
            content:"A short macchiato is similar to an espresso but with a dollop of steamed milk and foam to mellow the harsh taste of an espresso.",
            icon:<svg  className="tcb-icon" viewBox="0 0 448 512" data-id="icon-coffee-togo-light" data-name="">
            <path d="M432 64h-16l-23.16-46.31A32 32 0 0 0 364.22 0H83.78a32 32 0 0 0-28.62 17.69L32 64H16C7.16 64 0 71.16 0 80v64c0 8.84 7.16 16 16 16h18.67l26.89 322.66C62.94 499.24 76.8 512 93.44 512h261.11c16.64 0 30.51-12.76 31.89-29.34L413.33 160H432c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16zm-77.44 416H93.44l-5.33-64h271.78l-5.33 64zm8-96H85.44L74.78 256h298.45l-10.67 128zm13.33-160H72.11l-5.33-64h314.45l-5.34 64zM416 128H32V96h19.78l32-64h280.45l32 64H416v32z"></path>
        </svg>,
        },
        {
            id:4,
            title:" Long Macchiato",
            content:" A long macchiato is the same as a short macchiato but with a double shot of espresso.The same rule of thirds applies in the traditionally made long macchiato.",
            icon:<svg  className="tcb-icon" viewBox="0 0 448 512" data-id="icon-coffee-togo-light" data-name="">
            <path d="M432 64h-16l-23.16-46.31A32 32 0 0 0 364.22 0H83.78a32 32 0 0 0-28.62 17.69L32 64H16C7.16 64 0 71.16 0 80v64c0 8.84 7.16 16 16 16h18.67l26.89 322.66C62.94 499.24 76.8 512 93.44 512h261.11c16.64 0 30.51-12.76 31.89-29.34L413.33 160H432c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16zm-77.44 416H93.44l-5.33-64h271.78l-5.33 64zm8-96H85.44L74.78 256h298.45l-10.67 128zm13.33-160H72.11l-5.33-64h314.45l-5.34 64zM416 128H32V96h19.78l32-64h280.45l32 64H416v32z"></path>
        </svg>,
        },
        {
            id:5,
            title:" Ristretto",
            content:" A ristretto is an espresso shot that is extracted with the same amount of coffee but half the amount of water. The end result is a more concentrated and darker espresso",
            icon:<svg  className="tcb-icon" viewBox="0 0 448 512" data-id="icon-coffee-togo-light" data-name="">
            <path d="M432 64h-16l-23.16-46.31A32 32 0 0 0 364.22 0H83.78a32 32 0 0 0-28.62 17.69L32 64H16C7.16 64 0 71.16 0 80v64c0 8.84 7.16 16 16 16h18.67l26.89 322.66C62.94 499.24 76.8 512 93.44 512h261.11c16.64 0 30.51-12.76 31.89-29.34L413.33 160H432c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16zm-77.44 416H93.44l-5.33-64h271.78l-5.33 64zm8-96H85.44L74.78 256h298.45l-10.67 128zm13.33-160H72.11l-5.33-64h314.45l-5.34 64zM416 128H32V96h19.78l32-64h280.45l32 64H416v32z"></path>
        </svg>,
        },
        {
            id:6,
            title:" Long Black (Americano)",
            content:" A long black (aka “americano”) is hot water with an espresso shot extracted on top of the hot water. ",
            icon:<svg  className="tcb-icon" viewBox="0 0 448 512" data-id="icon-coffee-togo-light" data-name="">
            <path d="M432 64h-16l-23.16-46.31A32 32 0 0 0 364.22 0H83.78a32 32 0 0 0-28.62 17.69L32 64H16C7.16 64 0 71.16 0 80v64c0 8.84 7.16 16 16 16h18.67l26.89 322.66C62.94 499.24 76.8 512 93.44 512h261.11c16.64 0 30.51-12.76 31.89-29.34L413.33 160H432c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16zm-77.44 416H93.44l-5.33-64h271.78l-5.33 64zm8-96H85.44L74.78 256h298.45l-10.67 128zm13.33-160H72.11l-5.33-64h314.45l-5.34 64zM416 128H32V96h19.78l32-64h280.45l32 64H416v32z"></path>
        </svg>,
        },
     
    ]
  return (
   <section id='services' className='block block-services'>
 <Container fluid>
 <Herosec title="Products" subtitle=" learn more Coffee Type"/>
 
    <Row>
      
      {TypeCoffee.map(coffee =>{
        return(
            <Col sm={4} className='holder' key={coffee.id}>
            <div style={{width:"25px", color:"brown"}} className='icon'>
            {coffee.icon}
          </div>
          <h3 style={{color:"sienna"}}> {coffee.title}</h3>
          <p> {coffee.content} </p>
          </Col>
        );
      })}
     
    
    </Row>
  </Container>
   </section>
  )
}
