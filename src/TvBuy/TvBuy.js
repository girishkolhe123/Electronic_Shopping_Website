import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import s4 from '../images/s4.png';
import s5 from '../images/s5.png';
import s6 from '../images/s6.png';
import lg from '../images/lg.png';
import bg1 from '../images/bg1.png';
import fm from '../images/fm.png';
import dg from '../images/dg.png';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './TvBuy.css'


export const TvBuy = () => {
  return (
    <div className='Container'>
      {/* <Container>
        <Card style={{ width: '12rem',height:'10rem' }}>
      <Card.Img variant="top" src={s1}/>
    </Card>

        </Container> */}

      <Row className='hh'>
        <Col xs={6}>
          <img className='img1' src={s1} />
          <img className='img1' src={s2} />
          <img className='img1' src={s3} />
          <img className='img1' src={s4} />
          <img className='img1' src={s5} />
          <img className='img1' src={s6} />
        </Col>


        <Col xs={6}>

          <h1 style={{ marginTop: '30px', fontWeight: 'bold' }}>LG 32" HD LED 32LK526BPTA</h1>

          <bdi style={{ fontSize: '30px', color: 'red', fontWeight: 'bold' }}><span>₹</span>&nbsp;14,400</bdi>
          <div><span style={{ fontWeight: 'bold' }}>MRP:<del> ₹ 16,490</del></span></div>

          <div style={{ display: 'flex', marginTop: '15px' }}>
            <h5 style={{ marginTop: '25px' }}>Brand:&nbsp;</h5>
            <span >

              <img style={{ height: '60px', width: '60px', marginTop: '10px', border: '1px solid black' }} src={lg} alt="LG" />
            </span>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p><span><strong >Product Features :-</strong></span></p>
            <ul>
              <li>IPS Display</li>
              <li>FM Radio</li>
              <li>20W Powerful Sound</li>
              <li>Quick Access</li>
              <li>Built In &amp; Upgradable Games</li>
              <li>All Round Protection Plus</li>
            </ul>
          </div>

          <Row>
            <Col></Col>
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
          <h1><span className='txt2'> IPS Display</span></h1>
          <h5>The IPS Panel maintains color vibrancy all across the screen and from wide angles</h5>
        </div>






    
        
      <Col xs={4}>
          <div>
            <img className='img offset-6' src={bg1} />
          </div>
        </Col > 

      </Row>

      <Container>
            <Row className='row1'>
                <Col>
                    <div>
                        <img
                            className="img2"
                            src={fm}
                            alt="First slide"
                        />
                    </div>
                </Col>
                <Col>
                    <h1 className='aboutme'>FM Radio</h1>
                    <h5 id='text3'>Enjoy live FM radio along with clear & louder sound in LG LED TV.</h5>
                    
                    

                </Col>


                <Col xs={4}>
          <div>
            <img className='img3 offset-5' src={dg} />
          </div>
        </Col > 
            </Row>
        </Container>




    </div>
  )
}

