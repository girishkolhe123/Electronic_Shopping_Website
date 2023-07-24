import React from 'react'
// import './Mobile.css'
import './Tv.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../images/LG 55″ 4K NANO CELL LED 55NANO80TNA.jpg'
import img2 from '../images/LG 43″ FHD Smart LED 43LM6360PTB.jpg'
import img3 from '../images/LG 55″ 4K Smart OLED OLED55CXPTA.jpg'
import img4 from '../images/Samsung 65″ Neo QLED 8K Smart TV 65QN800A.png'
import img5 from '../images/Sony Bravia XR 65″ XR-65X90J.png'
import img6 from '../images/Sony 32″ HD Smart LED KLV-32W6100.jpg'
import img7 from '../images/LG 50″ 4K Smart UHD LED 50UM7700PTA.jpg'
import img8 from '../images/Samsung 43″ FHD Smart LED 43T5500.png'
import img9 from '../images/Samsung 32″ HD LED 32T4050.png'



export const Tv = () => {
  
  const mobileName = [ "LG 55″ 4K Smart OLED OLED55CXPTA","Samsung 65″ Neo QLED 8K Smart TV 65QN800A", "Sony Bravia XR 65″ XR-65X90J", "LG 55″ 4K NANO CELL LED 55NANO80TNA", "LG 43″ FHD Smart LED 43LM6360PTB",  "Sony 32″ HD Smart LED KLV-32W6100", "LG 50″ 4K Smart UHD LED 50UM7700PTA", "Samsung 43″ FHD Smart LED 43T5500", "Samsung 32″ HD LED 32T4050"]
  const mobilePrice = [14400, 274900, 128490, 26544, 43563, 90433, 32145, 49588, 80344]
  const mobileMRP = [16400, 229990, 179900, 29544, 45563, 93433, 35145, 51588, 83344]
  const mobileImages = [img6, img4, img5, img1, img2, img3, img7, img8, img9]

  return (
  <div className='main'>
    <Container>
    <div className='catergory-heading-mob'>Televisions</div>
    <div className='hori-line'><hr/></div>

    <CardGroup className='row-cards'>
    <div className='row'>
  {
    mobileName.map((v, idx) => (
     <div key={idx} className='col-md-4'>
      <Card className='mob-cards'>
        <a href='#/tvbuy'> <Card.Img variant="top" className='card-img-mob mx-auto' src={mobileImages[idx]} /></a>
        <Card.Body>
          <Card.Title>{v}</Card.Title>
          <Card.Text>
            <span>Rs. {mobilePrice[idx]}</span> <del>Rs. {mobileMRP[idx]}</del>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    ))
    }
    </div>
    </CardGroup>
    </Container>
  </div>
  )
}

