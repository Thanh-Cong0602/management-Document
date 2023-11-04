import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import student from "../assets/images/students.png"
import course from "../assets/images/courses.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
   let navigate = useNavigate();
   const [user, setUser] = useState();
   useEffect(() => {
    var user = window.localStorage.getItem("email");
    setUser(user);
   }, []);
    return (
      
        <Container>
          {!user && navigate(`/login`)}
        <Row style={{textAlign: "center"}}>
          <strong>WELCOME TO STUDENT BK MANAGEMENT!!!</strong>
        </Row>
        <Row style={{margin: "50px auto"}}>
        <Col md="6">
        <Card style={{ width: '18rem', margin: "0px auto" }}>
      <Card.Img variant="top" src={student} />
      <Card.Body style={{textAlign: "center"}}>
        <Button variant="primary"><Link to="/students" style={{color: "white", textDecorationLine: "none"}}>Manage students</Link></Button>
      </Card.Body>
    </Card>
    </Col>
          <Col md="6" style={{margin: "0px auto"}}>
          <Card style={{ width: '18rem', margin: "0px auto"}}>
      <Card.Img variant="top" src={course} />
      <Card.Body style={{textAlign: "center"}}>
        <Button variant="primary"><Link to="/courses" style={{color: "white", textDecorationLine: "none"}}>Manage courses</Link></Button>
      </Card.Body>
      </Card>
          </Col>
        </Row>
      </Container>
    );
}
export default Home