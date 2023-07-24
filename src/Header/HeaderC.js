import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import {HomeC} from '../Home/HomeC'
import {Login} from '../Form/Login'
import {Register} from '../Form/Register'
import {Mobile} from '../Mobile/Mobile'
import { Success } from '../Form/Success';
import { About } from '../About/About'
import { MyOrders } from '../Form/MyOrders';
import { TvBuy } from '../TvBuy/TvBuy';
import { Tv } from '../TV/Tv';
import { Washmachine } from '../Washing_Machine/Washmachine';
import { WashBuy} from '../WashBuy/WashBuy';
import { MblBuy } from '../MblBuy/MblBuy';
import Button from 'react-bootstrap/Button';
import { MyProfile } from '../MyProfile/MyProfile';
import { store } from '../CustomerRedux/store';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import { updateCurrentLoginStatus, updateCustomerData } from '../CustomerRedux/reducer';

export const HeaderC = () => {

  const [log, setLog] = React.useState(false);
  
  const tempData =  useSelector((state) => {
    return state;
  })

  React.useEffect(()=>{
      setLog(tempData.updateCurrentLoginStatus.isCurrentLogin);
  }, [tempData]);

  const customerLogout = async ()=>{

    if(log)
    {
        store.dispatch({
            type:'',
            isUserLogin:false
        })
        alert( "You are logout...!!!");
    }
  }

  return (
    <div>
    

    <Navbar bg="info" expand="lg" className='nav-head'>
      <Container fluid>
        <Navbar.Brand href="#/home">Electronics</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#/home">Home</Nav.Link>
            <Nav.Link href="#/about">About Us</Nav.Link>
            
            {log && <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#/myprofile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#/myorders">My Orders</NavDropdown.Item>
            </NavDropdown>}
            
          </Nav>
          {log ? <Button className='btn1' href="#/login" variant="primary" onClick={customerLogout}>Log Out</Button> : <><Nav.Link href="#/login">Login</Nav.Link>
          <Button className='btn1' href="#/register" variant="primary">Sign Up</Button></> }
          
          {/* <Button className='primary'><Nav.Link href="#/register">Sign Up</Nav.Link></Button> */}
          {/* <Nav.Link href="#/login">Log Out</Nav.Link> */}
          


          {/* <a href='#/login'><label >Login </label></a> */}
          {/* <NavDropdown title="User" id="navbarScrollingDropdown" className='right-navbar'>
              <NavDropdown.Item href="#/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="#/register">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="#/myorders">My Orders</NavDropdown.Item> 

              
              
            </NavDropdown> */}
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <HashRouter>
      <Routes>
        <Route path="/home" element = {<HomeC/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/myorders" element = {<MyOrders/>}/>
        <Route path="/tvbuy" element= { <TvBuy/>}/>
        <Route path="/mobile" element = {<Mobile/>}/>
        <Route path="/myprofile" element = {<MyProfile/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/tv" element = {<Tv/>}/>
        <Route path="/washmachine" element = {<Washmachine/>}/>
        <Route path='/washbuy' element= {<WashBuy/>}/>
        <Route path='/mblbuy' element={<MblBuy/>}/>
        <Route path="/" element = {<HomeC/>}/>
        <Route path="*" element = {<Navigate to ="/home"/>}/>
      </Routes>
    </HashRouter>

    </div>
  )
}
