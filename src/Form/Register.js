import React, { createRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import pic1 from '../images/img-regt.jpg'
import './Register.css'

export const Register = () => {

  // const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();
  const ref4 = createRef();
  const ref5 = createRef();
  const ref6 = createRef();
  const ref7 = createRef();


  const customerRegister = async () => {

    let firstname = ref2.current.value
    let lastname = ref3.current.value
    let contact = ref4.current.value
    let city = ref5.current.value
    let email = ref6.current.value
    let password = ref7.current.value

    let userData = { firstname, lastname, contact, city, email, password }
    console.log(userData)

    //const res = await axios.post('http://localhost:3000/register/reg-std')
    //console.log(res)

    const resp = await fetch("http://localhost:3000/register/cust-reg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })
    const res = await resp.json()
  }

  return (
    <div>
      <Container className='register'>

        <Row>
        {/* <Col xs={6} md={1}>
          
          </Col> */}

          <Col xs={6} md={6}>
            <Card className='regt-img-reg'>
              <Card.Img src={pic1} />

            </Card>
          </Col>

          

          <Col xs={6} md={6}>
          <div className='text-back  ml-3 login-form-main1'>
            <div >
              <h1 className='head-regt'>Registration Form</h1>
            </div>
            <Form>
              <div className='Row'>
                <div className='Col-md-6 '>
                <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
                  {/* <Form.Label>First Name : </Form.Label> */}
                  <Form.Control type="text" placeholder="Enter First Name"  ref={ref2} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                </div>
                <div className='Col-md-6 '>
                <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
                  {/* <Form.Label>Last Name : </Form.Label> */}
                  <Form.Control type="text" placeholder="Enter Last Name" ref={ref3} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                </div>
              </div>
              <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
                {/* <Form.Label>Mobile No. : </Form.Label> */}
                <Form.Control type="number" placeholder="Enter Mobile No. " ref={ref4} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
                {/* <Form.Label>City : </Form.Label> */}
                <Form.Control type="text" placeholder=" Enter City" ref={ref5} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
                {/* <Form.Label>Email : </Form.Label> */}
                <Form.Control type="email" placeholder="Enter Email" ref={ref6} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicPassword">
                {/* <Form.Label>Password :</Form.Label> */}
                <Form.Control type="password" placeholder="Enter Password" ref={ref7} />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={customerRegister}>
                Sign Up
              </Button>

              <Button className='sign-up-btn' href="#/login" variant="primary" type="submit" >
                Sign in
              </Button>
            </Form>
          </div>
          </Col>
          
        </Row>

      </Container>
    </div>
  )
}
