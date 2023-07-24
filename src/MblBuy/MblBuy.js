import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import m1 from '../images/m1.png';
import m2 from '../images/m2.png';
import m3 from '../images/m3.png';
import m4 from '../images/m4.png';
import m5 from '../images/m5.png';
import m6 from '../images/m6.png';
import samsung from '../images/samsung.png';
import Button from 'react-bootstrap/Button';
import mbg1 from '../images/mbg1.jpg';
import mbg2 from '../images/mbg2.jpg';
import fm from '../images/fm.png';
import dg from '../images/dg.png';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import './MblBuy.css'

import img1 from '../images/awesome.jpg'
import img2 from '../images/closer.jpg'
import img3 from '../images/focus.jpg'
import expand from '../images/expand.jpg'
import power from '../images/power.jpg'
import awesome1 from '../images/awesome1.jpg'
import looks from '../images/looks.jpg'

import CardGroup from 'react-bootstrap/CardGroup';

export const MblBuy = () => {

  

  return (
    <div className='Container'>
      {/* <Container>
        <Card style={{ width: '12rem',height:'10rem' }}>
      <Card.Img variant="top" src={s1}/>
    </Card>

        </Container> */}

      <Row className='hh'>
        <Col xs={6}>
          <img className='img1' src={m1} />
          <img className='img1' src={m2} />
          <img className='img1' src={m3} />
          <img className='img1' src={m4} />
          <img className='img1' src={m5} />
          <img className='img1' src={m6} />
        </Col>

        <Col xs={6}>

          <h1 style={{ marginTop: '30px', fontWeight: 'bold' }}>Samsung Galaxy A12</h1>

          <bdi style={{ fontSize: '30px', color: 'red', fontWeight: 'bold' }}><span>₹</span>&nbsp;12,999</bdi>
          <div><span style={{ fontWeight: 'bold' }}>MRP:<del> ₹ 14,999</del></span></div>

          <div style={{ display: 'flex', marginTop: '15px' }}>
            <h5 style={{ marginTop: '25px' }}>Brand:&nbsp;</h5>
            <span >

              <img style={{ height: '60px', width: '60px', marginTop: '10px', border: '1px solid black' }} src={samsung} alt="LG" />
            </span>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p><span><strong >Product Features :-</strong></span></p>
            <ul>
              <li>Expandable Upto 1 TB</li>
              <li>16.51 cm (6.5 inch) HD+ Display</li>
              <li>48MP + 5MP + 2MP + 2MP | 8MP Front Camera</li>
              <li>Dolby Sound</li>
              <li>5000 mAh Battery</li>
              <li>Mediatek Helio P35 (MT6765) Processor</li>
            </ul>
          </div>

          <Row>


            <div>
              <Table responsive="sm">

                <tbody className='pointer'>
                  <tr >

                    <td></td>
                    <td><Button variant="outline-secondary">White, 4GB, 128GB  </Button></td>
                    <td><Button variant="outline-secondary">White, 6GB, 128GB  </Button></td>


                  </tr>
                  <tr>
                    
                    <th><br></br>Variant : </th>
                    <td><Button variant="outline-secondary">Black, 4GB, 128GB  </Button></td>
                    <td><Button variant="outline-secondary">Black, 6GB, 128GB  </Button></td>

                  </tr>
                  <tr>

                    <td></td>
                    <td><Button variant="outline-secondary">Blue, 4GB, 128GB  </Button></td>
                    <td><Button variant="outline-secondary">Blue, 6GB, 128GB  </Button></td>


                  </tr>
                </tbody>
              </Table>

            </div>


            <Col><div className="d-grid gap-2" style={{ width: '400px' }}>





              <Button variant="primary" size="lg">
                Add to Cart
              </Button>
            </div></Col>
          </Row>


          <div className="d-grid gap-2" style={{ marginTop: '10px' }}>
            <Button variant="primary" size="lg">
              Buy Now
            </Button>
          </div>





        </Col>

        <div className='up'>
          <h1><span className='txt2'> AMOLED Display</span></h1>
          <h5>The IPS Panel maintains color vibrancy all across the screen and from wide angles</h5>
        </div>

        <Col xs={4}>
          <div>
            <img className='img offset-6' src={mbg1} />
            <img className='img offset-6' src={mbg2} />
            <br></br>
            <img className='img offset-6' src={expand} />
            <img className='img offset-6' src={power} />
            <img className='img offset-6' src={awesome1} />
            <img className='img offset-6' src={looks} />
          </div>
        </Col >

        

 

      </Row>

    

    </div>
  )
}
