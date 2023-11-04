import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-5">
      <Container className="text-white py-3">
        <Row>
          <Col md={6} lg={6} xs={12} className="py-2">
            <h2>DOCUMENT MANAGEMENT</h2>
          </Col>

          <Col md={6} lg={3} xs={12} className="py-2">
            <h2>Infomation</h2>
            <p>Address: Ho Chi Minh City</p>
            <p>Contact: +84 367 467 8934</p>
            <p>Email: hcmut@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
