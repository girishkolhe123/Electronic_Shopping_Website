import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import w1 from '../images/w1.jpg';
import w2 from '../images/w2.jpg';
import w3 from '../images/w3.jpg';
import w4 from '../images/w4.jpg';
import w5 from '../images/w5.jpg';
import w6 from '../images/w6.jpg';
import samsung from '../images/samsung.png';
import star from '../images/5star.jpg';
import washcool from '../images/washcool.jpg';
import intensive from '../images/Intensive.jpg';
import warranty from '../images/warranty.jpg';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './WashBuy.css'


export const WashBuy = () => {
  return (
    <div className='Container'>
      {/* <Container>
        <Card style={{ width: '12rem',height:'10rem' }}>
      <Card.Img variant="top" src={s1}/>
    </Card>

        </Container> */}

      <Row className='hh'>
        <Col xs={6}>
          <img className='img1' src={w1} />
          <img className='img1' src={w2} />
          <img className='img1' src={w3} />
          <img className='img1' src={w4} />
          <img className='img1' src={w5} />
          <img className='img1' src={w6} />
        </Col>


        <Col xs={6}>

          <h1 style={{ marginTop: '30px', fontWeight: 'bold' }}>Samsung 6.5kg Front Load Washing Machine WW65R20EKSS</h1>

          <bdi style={{ fontSize: '30px', color: 'red', fontWeight: 'bold' }}><span>₹</span>&nbsp;30,008</bdi>
          <div><span style={{ fontWeight: 'bold' }}>MRP:<del> ₹ 37,400</del></span></div>

          <div style={{ display: 'flex', marginTop: '15px' }}>
            <h5 style={{ marginTop: '25px' }}>Brand:&nbsp;</h5>
            <span >

              <img style={{ height: '60px', width: '60px', marginTop: '10px', border: '1px solid black' }} src={samsung} alt="LG" />
            </span>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p><span><strong >Product Features :-</strong></span></p>
            <ul>
              <li>EcoBubble Technology</li>
              <li>Hygiene Steam</li>
              <li>Ceramic Heater</li>
              <li>QuickDrive</li>
              
            </ul>
          </div>
          <div className='hori-line' style={{marginTop:'25px', marginBottom:'0px', height:'5px'}}><hr/></div>

          <div style={{ marginTop: '10px' }}>
          <span ><strong >Product Features :-</strong></span>
          </div>
        <li> <strong> 5% cashback</strong> upto <strong> ₹3,000/-</strong> on all leading Credit Card EMI Transactions.</li>
       <div style={{ marginTop: '20px' }}>
        <span ><strong  >No Cost EMI Offers :-</strong></span>
        <li> <strong>  No Cost EMI </strong>on all major Credit Card Transactions.</li>
        <li> <strong>  No Cost EMI </strong>on Axis bank Debit Card Transactions.</li>
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
          <h2><span className='txt2'> BEE 5 star certified</span></h2>
          <h3>5 Star Energy Rating</h3>
          <Container>
          <p>
            Spend less on bills and protect the planet. The washing machine’s high energy efficiency is certified by
             the Bureau of Energy Efficiency (BEE) with its highest “5 star” rating*.
             Its low power usage saves you money and also reduces harmful CO2 emissions, 
             so it has less impact on the environment.
             </p>
             </Container>
        </div>






    
        
      <Col xs={4}>
          <div>
            <img className='img offset-6' src={star} />
          </div>
        </Col > 

        <div className='up'>
          <h2><span className='txt2'> Wash Cool, Save Energy</span></h2>
          <h3>Eco Bubble™</h3>
         <Container>
            <p> 
                Save a huge amount of energy* by washing large loads at low temperatures using Eco Bubble™ technology. 
                Bubbles activate detergent, so it quickly penetrates fabric and removes dirt easily – even
                 in cool water (15°C).
                </p>
        </Container>

        </div>

        <Col xs={4}>
          <div>
            <img className='img offset-6' src={washcool} />
          </div>
        </Col >

        <div className='up'>
          <h2><span className='txt2'> Intensive Stain Removal</span></h2>
          <h3>Bubble Soak</h3>
         <Container>
            <p> 
            With the touch of a button Bubble Soak technology helps remove a variety of stubborn stains, including blood and grass. Clothes are thoroughly soaked in bubbles, so stains are loosened and removed effectively.*
                </p>
        </Container>

        </div>

        <Col xs={4}>
          <div>
            <img className='img offset-6' src={intensive} />
          </div>
        </Col >

        <div className='up'>
          <h2><span className='txt2'> Works Smart, Stays Young</span></h2>
          <h3>Digital Inverter Motor</h3>
         <Container>
            <p> 
            A Digital Inverter Motor delivers superior energy efficiency, minimal noise and exceptionally long-lasting performance, so it’s certified to work for 20 years* – backed-up by a 10 year warranty.
                </p>
        </Container>

        </div>

        <Col xs={4}>
          <div>
            <img className='img offset-6' src={warranty} />
          </div>
        </Col >
      </Row>

    




    </div>
  )
}

