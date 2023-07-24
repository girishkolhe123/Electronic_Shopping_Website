import React from 'react'
import './Mobile.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../images/mob1.png'
import img2 from '../images/redmi-9a.jpg'
import img3 from '../images/redmi-note-10s.png'
import img4 from '../images/samsung-galaxty-m13.jpg'
import img5 from '../images/samsung-galxy-f62.png'
import img6 from '../images/samsung-glaxy-m12.png'
import img7 from '../images/vivo-v12.jpg'
import img8 from '../images/vivo-y1s.jpg'
import img9 from '../images/vivo-y20a.jpg'



export const Mobile = () => {
  
  const mobileName = ["Samsung Galaxy A12", "IPhone 14", "Oneplus", "Huawei P", "Oppo Reno", "Google Pixel", "BlackBerry Key", "Realme GT", "Tecno Phantom"]
  const mobilePrice = [14000, 43000, 75000, 26544, 43563, 90433, 32145, 49588, 80344]
  const mobileMRP = [17000, 47000, 79000, 29544, 45563, 93433, 35145, 51588, 83344]
  const mobileImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

  return (
  <div className='container'>
    <div className='catergory-heading-mob'>Mobile</div>
    <div className='hori-line'><hr/></div>

    <CardGroup className='row-cards'>
    <div className='row'>
  {
    mobileName.map((v, idx) => (
     <div key={idx} className='col-md-4'>
      <Card className='tv-cards'>
        <a href='#/mblbuy'>
        <Card.Img variant="top" className='card-img-tv mx-auto' src={mobileImages[idx]} /></a>
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
  </div>
  )
}