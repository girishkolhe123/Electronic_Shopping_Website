import React from 'react'
import './home.css'
import mobile from '../images/icons8-google-pixel-6-50.png';
import Carousel from 'react-bootstrap/Carousel';
import carsl from '../images/carsl-dm.jpeg';
import carl from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
// import shoplaptop from '../images/shoplaptop.png'
import {FaLaptop} from 'react-icons/fa';
import {FaMobileAlt} from 'react-icons/fa';
import {GiWashingMachine} from 'react-icons/gi';

import {BiSpeaker} from 'react-icons/bi';
import {BsPrinter} from 'react-icons/bs';
import {BiHeadphone} from 'react-icons/bi';
import {TbAirConditioningDisabled} from 'react-icons/tb';
import {BsCamera} from 'react-icons/bs';
import {AiOutlineTablet} from 'react-icons/ai';
import {FiMonitor} from 'react-icons/fi';
import {BsSmartwatch} from 'react-icons/bs';
import {CgSmartHomeRefrigerator} from 'react-icons/cg';



import { CardsC } from '../Cards/CardsC';
import tv1 from '../images/tv-1.jpg'
import tv2 from '../images/tv-1.jpg'
import tv3 from '../images/tv-1.jpg'
import tv4 from '../images/tv-1.jpg'
import tv5 from '../images/tv-1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const HomeC = () => {

    const imgsrc = [tv1, tv2, tv3, tv4, tv5]  
    const cardlabel = ["LG", "Samsung", "Panasonic", "Redmi", "LG"]
    const offprice = ["17000", "17000", "17000", "17000", "17000"]
    const actualprice = ["19000","19000","19000","19000","19000"]

  return (
    <div className='home-body'>
        <Carousel indicators={false}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={carl}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>

        
        
        <div className='shop-category-text'> Shop By Category </div>

        <div>

        <Container>
      
      <Row className='offset-1'>
        <Col><a href="#/Mobile"><FaMobileAlt className='icon-category1' style={{fontSize:"60px" }}/></a></Col>
        <Col><a href='#/tv'><FiMonitor className='icon-category1' style={{fontSize:"60px"}}/></a></Col>
        <Col><a href='#/washmachine'><GiWashingMachine className='icon-category1' style={{fontSize:"60px"}}/></a></Col>
        <Col><BiSpeaker className='icon-category1' style={{fontSize:"60px"}}/></Col>
        <Col><BsPrinter className='icon-category1' style={{fontSize:"60px"}}/></Col>
        <Col><BiHeadphone className='icon-category1' style={{fontSize:"60px"}}/></Col>

      </Row>

      <Row className='offset-1'>
        <Col><TbAirConditioningDisabled className='icon-category1' style={{fontSize:"60px" }}/></Col>
        <Col><BsCamera className='icon-category1' style={{fontSize:"60px"}}/></Col>
        <Col><CgSmartHomeRefrigerator className='icon-category1' style={{fontSize:"60px"}}/></Col>
        <Col><AiOutlineTablet className='icon-category1' style={{fontSize:"60px"}}/></Col>
        <Col><FaLaptop className='icon-category1' style={{fontSize:"60px"}}/></Col>
        <Col><BsSmartwatch className='icon-category1' style={{fontSize:"60px"}}/></Col>

      </Row>

      <Row className='offset-1'>
      <Col><TbAirConditioningDisabled className='icon-category1' style={{fontSize:"60px" }}/></Col>
      <Col><CgSmartHomeRefrigerator className='icon-category1' style={{fontSize:"60px"}}/></Col>
      <Col><BsSmartwatch className='icon-category1' style={{fontSize:"60px"}}/></Col>
      <Col><FaMobileAlt className='icon-category1' style={{fontSize:"60px"}}/></Col>
      <Col><FaLaptop className='icon-category1' style={{fontSize:"60px" }}/></Col>
      <Col><BsCamera className='icon-category1' style={{fontSize:"60px"}}/></Col>
      

      </Row>


    </Container>
          
        
        
        </div>
        
       

       

        
        
        {/* <img src={mobile} className='icon-category'/>
        <img src={mobile} className='icon-category'/>
        <img src={mobile} className='icon-category'/>
        <img src={mobile} className='icon-category'/>
        <img src={mobile} className='icon-category'/>
        <img src={mobile} className='icon-category'/>
        <br/>
        <label className='icon-category-label'>mobile</label>
        <label className='icon-category-label'>mobile</label>
        <label className='icon-category-label'>mobile</label>
        <label className='icon-category-label'>mobile</label>
        <label className='icon-category-label'>mobile</label>
        <label className='icon-category-label'>mobile</label> */}
        
        {/* <CardsC imgsrc={imgsrc} offprice={offprice} actualprice={actualprice} cardlabel={cardlabel}/> */}
          <CardsC/>
          {/* <CardsC/>
          <CardsC/> */}

           

    </div>
  )
}
