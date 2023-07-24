import React, {createRef} from 'react'
// import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import pic1 from '../images/img-regt.jpg'
import './Register.css'
import { useSelector } from 'react-redux';
import {connect} from 'react-redux'
import { updateCurrentLoginStatus, updateCustomerData } from '../CustomerRedux/reducer';
import {store} from '../CustomerRedux/store'

export const Login = () => {

  const refEmail = createRef();
  const refPassword = createRef();

  const [currentEmail, setCurrentEmail] = React.useState("");
  const [isCurrentLogin, setCurrentLogin] = React.useState(false);

  const customerLogin = async () => {

    let email = refEmail.current.value
    let password = refPassword.current.value
    let loginData = {email, password}
    console.log(loginData)

    let url = "http://localhost:3000/register/cust-login/"+email+"/"+password;

    const resp = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    const res = await resp.json()

    const customerData = res.customerData;
    setCurrentLogin(res.isCurrentLogin);

    if(res.isCurrentLogin)
    {
      setCurrentEmail(email);
      store.dispatch({
        type:'',
        isCurrentLogin:res.isCurrentLogin,
        customerData:customerData
      })
      alert(customerData.firstname+" is logged in...!!!");
    }
    else
    {
      alert(email+" is not found :(");
    }
  }

  return (

    <div>
      <Container className='register'>

        <Row>
        {/* <Col xs={6} md={1}>
          
          </Col> */}

          <Col xs={6} md={6}>
            <Card className='regt-img'>
              <Card.Img src={pic1} />

            </Card>
          </Col>

          

          <Col xs={6} md={6}>
          <div className='text-back  ml-3 login-form-main'>
            <div >
              <h1 className='head-regt'>Login Form</h1>
            </div>
            <div className='login-form'>
            <Form>
             

              <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
                {/* <Form.Label>Email : </Form.Label> */}
                <Form.Control type="email" placeholder="Enter Email"  ref={refEmail}/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicPassword">
                {/* <Form.Label>Password :</Form.Label> */}
                <Form.Control type="password" placeholder="Enter Password"  ref={refPassword}/>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={customerLogin}>
                Sign In
              </Button>
              <Button className='sign-up-btn' href="#/register" variant="primary" type="submit" onClick={customerLogin}>
                Sign Up
              </Button>
            </Form>
            </div>
          </div>
          </Col>
          
        </Row>

      </Container>
    </div>


  )
}
