import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
const Login =  () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendData = {
            email: user.email,
            password: user.password,
        };
        //console.log(sendData);
        axios.post('http://localhost/api/login.php', sendData)
            .then((result) => {
                 //console.log(result);
                if (result.data.Status === '200') {
                    window.localStorage.setItem('email', result.data.email);
                   
                    navigate(`/`);
                    window.location.reload()
                    /* ctx.UserDispatch({
                        type: 'LOGIN',
                        payload: result.data.id
                    }) */
                } else {
                    alert('Invalid User');
                }
            });
    };
    return(
        <div className='login' style={{marginLeft: "30%", marginTop: "50px"}}>
        <Card className="text-center" style={{width: "50%", height: "50%"}}>
      <Card.Header style={{fontWeight: "bold"}} >Login</Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign: "left"}}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} value={user.email} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} value={user.password} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{textAlign: "left"}}>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
      </Card.Body>
      <Card.Footer className="text-muted"><Link to="/register" style={{textDecorationLine: "none"}}>Đăng ký tài khoản</Link></Card.Footer>
    </Card>
    </div>
    );
}
export default Login