import React from 'react'
// import './Mobile.css'
// import './Tv.css'
import './washmachine.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img3 from '../images/LG 6.5kg Front Load Washing Machine FHT1265ZNL.png'
import img2 from '../images/Whirlpool 7.5 Kg Stain Wash Ultra Grey Top.png'
import img1 from '../images/Samsung 6.5kg Front Load Washing Machine WW65R20EKSS.jpg'
import img4 from '../images/Samsung 9kg Washing Machine WD90K6410OX.png'
import img5 from '../images/LG 7kg Top Load Washing Machine T70SJDR1Z.jpg'
import img6 from '../images/Samsung 10.5Kg Washer Dryer Front Load Washing Machine WD10T704DBX.png'
import img7 from '../images/Samsung 6.5kg Top Load Washing Machine WA65A4002GS.png'
import img8 from '../images/Samsung 8Kg Fully Automatic Front Load Washing Machine WW80T4040CX.png'
import img9 from '../images/Samsung 6.5kg Top Load Washing Machine WA65A4002GS.png'



export const Washmachine = () => {
  
  const mobileName = ["Samsung 6.5kg Front Load Washing Machine WW65R20EKSS","Whirlpool 7.5 Kg Stain Wash Ultra Grey Top Washing Machine", "LG 6.5kg Front Load Washing Machine FHT1265ZNL" , "Samsung 9kg Washing Machine WD90K6410OX", "LG 7kg Top Load Washing Machine T70SJDR1Z",  "Samsung 10.5Kg Washing Machine WD10T704DBX", "Samsung 6.5kg Top Load Washing Machine WA65A4002GS", "Samsung 8Kg Washing Machine WW80T4040CX", "Samsung 6.5kg Top Load Washing Machine WA65A4002GS"]
  const mobilePrice = [30000, 20000, 34500, 26544, 43563, 90433, 32145, 49588, 80344]
  const mobileMRP = [37400, 25500, 46000, 29544, 45563, 93433, 35145, 51588, 83344]
  const mobileImages = [img1, img2, img3,img6, img4, img5, img7, img8, img9]

  return (
  <div className='main'>
    <Container>
    <div className='catergory-heading-mob'>Washing Machines</div>
    <div className='hori-line'><hr/></div>

    <CardGroup className='row-cards'>
    <div className='row'>
  {
    mobileName.map((v, idx) => (
     <div key={idx} className='col-md-4'>
      <Card className='mob-cards'>
        <a href='#/washbuy'> 
        <Card.Img variant="top" className='card-img-mob mx-auto' src={mobileImages[idx]} /></a>
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

