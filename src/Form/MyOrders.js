import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import mob1 from '../images/mob1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MyOrders.css'
import { Button } from 'react-bootstrap';

export const MyOrders = () => {
  const stl = {
    height:"200px",
    width:"200px"
  }
    return (
      <div>
        <Container>
            <div className='myorders-heading offset-1'>

                <h2>My Orders</h2>

            </div>
        <div className='myorders-txt mx-auto '>
        <Row>
        
        <Col xs={6} md={2}>
        <Card.Img  variant='top' style={stl} src={mob1} />
      
        </Col>
        <Col xs={6} md={10}>
            <div className='orders-text'>
        <Card.Body >
        <Card.Title><b>Iphone 14 pro max</b></Card.Title>
        <Card.Text>
          Price: Rs.20000
        </Card.Text>
        <Button>Cancel</Button>
      </Card.Body>
      </div>
        </Col>
       
      </Row>
      </div>

      <div className='myorders-txt mx-auto '>
        <Row>
        
        <Col xs={6} md={2}>
        <Card.Img  variant='top' style={stl} src={mob1} />
      
        </Col>
        <Col xs={6} md={10}>
            <div className='orders-text'>
        <Card.Body >
        <Card.Title><b>Iphone 14 pro max</b></Card.Title>
        <Card.Text>
          Price: Rs.20000
        </Card.Text>
        <Button className='btn'>Cancel</Button>
      </Card.Body>
      </div>
        </Col>
       
      </Row>
      </div>
      
 <div className='bottom'>

 </div>

    </Container>
    </div>
  )
}
