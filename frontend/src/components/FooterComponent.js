import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const FooterComponent =() =>{
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
          <Col className="bg-dark text-white text-center py-5">This React App is Designed and Developed By <a href="https://sites.google.com/diu.edu.bd/azman-hossain/home" >Azman Hossain</a></Col>
        </Row>
      </Container>
    </footer>
    
  )
}
export default FooterComponent;