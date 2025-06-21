import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Tab, Nav } from 'react-bootstrap';
import { loginWithEmail, signUpWithEmail, loginWithGoogle } from '../utils/helper.js';
import { FcGoogle } from 'react-icons/fc';
import loginSvg from '/login_model.svg';
import Loading from '../components/Loading.jsx';


const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value;
    const password = e.target.loginPassword.value;
    try {
      setLoading(true);
      await loginWithEmail(email, password);
      setLoading(false);
      alert('Logged in!');
      navigate('/new'); 
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.signupEmail.value;
    const password = e.target.signupPassword.value;
    try {
      setLoading(true)
      await signUpWithEmail(email, password);
      setLoading(false)
      navigate('/new')
      alert('Account created!');
      setActiveTab('login');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLoginWithGoogle = async ()=>{
    try{
      
      setLoading(true)
      await loginWithGoogle();
      setLoading(false)
      navigate('/new')
    }catch(err){
      console.error(err)
      alert(err.message)
    
  }
}




  return (
      <Container fluid className="my-5 h-100">
        {loading && <Loading text="authenticating"/>}
        <Row className="h-100 align-items-center">
          <Col md={6} className="d-flex align-items-center justify-content-center">
          <img src={loginSvg} alt="Login Illustration" className="img-fluid w-75" />
        </Col>

          <Col md={6} className="d-flex justify-content-center">
            <Card className="p-4 shadow w-100" style={{ maxWidth: '400px', zIndex: 2 }}>
              <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Nav variant="tabs" className="mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="login">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="login">
                    <Form onSubmit={handleLogin}>
                      <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                      </Form.Group>
                      <Button variant="dark" className="w-100" type='submit'>Login</Button>
                    </Form>
                    <div className="mt-3 text-center">
                      Don't have an account?{' '}
                      <span
                        className="text-primary fw-bold"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setActiveTab('signup')}
                      >
                        Sign Up
                      </span>
                    </div>
                    <hr className="my-3" />
                    <div className="text-center text-muted mb-3">OR</div>

                    <Button
                      variant="light"
                      onClick={handleLoginWithGoogle}
                      className="d-flex align-items-center justify-content-center border w-100 shadow-sm"
                      style={{ gap: '10px', padding: '10px', fontWeight: '500' }}
                    >
                    <FcGoogle size={20} />

                      Sign in with Google
                    </Button>

                  </Tab.Pane>

                  <Tab.Pane eventKey="signup">
                    <Form onSubmit={handleSignup}>
                      <Form.Group className="mb-3" controlId="signupName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="signupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="signupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                      </Form.Group>
                      <Button variant="dark" className="w-100" type='submit'>Sign Up</Button>
                    </Form>
                    <div className="mt-3 text-center">
                      Already have an account?{' '}
                      <span
                        className="text-primary fw-bold"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setActiveTab('login')}
                      >
                        Login
                      </span>
                    </div>
                    <hr className="my-3" />
                    <div className="text-center text-muted mb-3">OR</div>

                    <Button
                      variant="light"
                      onClick={handleLoginWithGoogle}
                      className="d-flex align-items-center justify-content-center border w-100 shadow-sm"
                      style={{ gap: '10px', padding: '10px', fontWeight: '500' }}
                    >
                      <FcGoogle size={20} />

                      Sign in with Google
                    </Button>

                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default AuthPage;
