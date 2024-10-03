import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <Container fluid>
        <div className="copyright" id="footer">
            &copy; 2024 corporate developer by <span style={{color:"#fff",fontWeight:"bold",fontSize:"20px"}}>Rawad Altari</span>
        </div>
        <div className="socails">
          
                <ul style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <li ><a href="https://www.google.com" style={{color:"white",margin:"10px",fontSize:"20px"}}>  <i className="fab fa-linkedin-in"></i></a></li>
                <li ><a href="https://www.facebook.com" style={{color:"white",margin:"10px"}}> <i className="fab fa-twitter"></i></a></li>
                <li ><a href="https://www.google.com" style={{color:"white",margin:"10px"}}> <i className="fab fa-facebook"></i></a></li>
                
            </ul>
           
           
            </div> 
    </Container>
  )
}
