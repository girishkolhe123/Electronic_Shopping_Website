import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './MyProfile.css'
import pic1 from '../images/img-regt.jpg'
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { AiFillEyeInvisible } from "@react-icons/all-files/ai/AiFillEyeInvisible";
import { useSelector } from 'react-redux';
import {connect} from 'react-redux'
import { updateCurrentLoginStatus, updateCustomerData } from '../CustomerRedux/reducer';
import {store} from '../CustomerRedux/store'


export const MyProfile = () => {

  const data = useSelector((state) => {
    return state;
  })

  const [login, setLogin] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  React.useEffect(()=>{
      if(data.updateCurrentLoginStatus.isCurrentLogin)
      {
          setLogin(data.updateCurrentLoginStatus.isCurrentLogin);
      }

      if(data.updateCustomerData.customerData)
      {
          setUserData(data.updateCustomerData.customerData);
      }
  }, [data]);

  const [fname, setFname] = React.useState('Sarthak');
  const [lname, setLname] = React.useState('Yeole');
  const [mobno, setMobno] = React.useState('986541237');
  const [city, setCity] = React.useState('Chalisgaon');
  const [email, setEmail] = React.useState('s@gmail.com');
  const [password, setPassword] = React.useState('1234');

  const [showPassword, setShowPassword] = React.useState(false);
  const [type, setType] = React.useState('password');

  React.useEffect(()=>{
    
    if(login && userData)
    {
      setFname(userData.firstname);
      setLname(userData.lastname);
      setEmail(userData.email);
      setMobno(userData.contact);
      setCity(userData.city);
      setPassword(userData.password);
    }

  }, [login, userData]);

  const handleFname=(event)=> {
    setFname(event.target.value)

  }

  const handleLname=(event)=> {
    setLname(event.target.value)

  }

  const handleMobno=(event)=> {
    setMobno(event.target.value)

  }

  const handleCity=(event)=> {
    setCity(event.target.value)

  }

  const handleEmail=(event)=> {
    setEmail(event.target.value)

  }

  const handlePass=(event)=> {
    setPassword(event.target.value)

  }

  const fnShowPassword = () => {
    
    if (showPassword) {
      setShowPassword(false)
    } 
    else{
      setType("text")
      setShowPassword(true)
    }
  }

  const updateCustomer = async ()=>{

    let upDT = {
      firstname : fname,
      lastname : lname, 
      email, 
      contact : mobno, 
      city, 
      password
    }

    const resp = await fetch("http://localhost:3000/register/update-customer", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(upDT)
    })
    const res = await resp.json()

    if(res.isUpdated)
    {
        alert("Updated Successfully");
    }
    else
    {
      alert("Failed to update...!!!");
    }
  }

  // const [fname, setFname] = React.useState('Sarthak');
  // const [lname, setLname] = React.useState('Yeole');
  // const [mobno, setMobno] = React.useState('986541237');
  // const [city, setCity] = React.useState('Chalisgaon');
  // const [email, setEmail] = React.useState('s@gmail.com');
  // const [password, setPassword] = React.useState('1234');

  // const [showPassword, setShowPassword] = React.useState(false);
  // const [type, setType] = React.useState('password');



  // const handleFname=(event)=> {
  //   setFname(event.target.value)

  // }

  // const handleLname=(event)=> {
  //   setLname(event.target.value)

  // }

  // const handleMobno=(event)=> {
  //   setMobno(event.target.value)

  // }

  // const handleCity=(event)=> {
  //   setCity(event.target.value)

  // }

  // const handleEmail=(event)=> {
  //   setEmail(event.target.value)

  // }

  // const handlePass=(event)=> {
  //   setPassword(event.target.value)

  // }

  // const fnShowPassword = () => {
    
  //   if (showPassword) {
  //     setType("password")
  //     setShowPassword(false)
  //   } 
  //   else{
  //     setType("text")
  //     setShowPassword(true)
  //   }
  // }



  return (
    <div>
        <Container>
            

            <div>
                
      <Container className='register'>

<Row>
<div >
      <h1 className='head-regt offset-0'>My Profile</h1>
    </div>
  <Col xs={6} md={6}>

  
      <Card.Img className='regt-img-mp' src={pic1}  />

      {/* <input type="file"  accept="image/*"  /> */}
      <Button className='add-p-p offset-4' variant="info" type="submit" >
        Add Profile Photo
      </Button>
    
  </Col>


  

  <Col xs={6} md={6}>
  <div className='text-back  ml-3 login-form-main1'>
    {/* <div >
      <h1 className='head-regt'>My Profile</h1>
    </div> */}
    <Form>
      <div className='Row'>
        <div className='Col-md-6 '>
        <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
          {/* <Form.Label>First Name : </Form.Label> */}
          <Form.Control type="text" value={fname} onChange={handleFname} placeholder="Enter First Name"  />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        </div>
        <div className='Col-md-6 '>
        <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
          {/* <Form.Label>Last Name : </Form.Label> */}
          <Form.Control type="text" value={lname} onChange={handleLname} placeholder="Enter Last Name"  />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        </div>
      </div>
      <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
        {/* <Form.Label>Mobile No. : </Form.Label> */}
        <Form.Control type="number" value={mobno} onChange={handleMobno} placeholder="Enter Mobile No. "  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
        {/* <Form.Label>City : </Form.Label> */}
        <Form.Control type="text" value={city} onChange={handleCity} placeholder=" Enter City"  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicEmail">
        {/* <Form.Label>Email : </Form.Label> */}
        <Form.Control type="email" value={email} onChange={handleEmail} placeholder="Enter Email"  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 place-text mx-auto" controlId="formBasicPassword">
        {/* <Form.Label>Password :</Form.Label> */}
        <span className='eye-icon' onClick={fnShowPassword}>
        {showPassword ? <AiFillEyeInvisible/>: <AiFillEye/> }
          </span> 
        <Form.Control type={type} value={password} onChange={handlePass} placeholder="Enter Password"   /> 
        
        
      </Form.Group>

      <Button className='add-p-p-upd' variant="info" type="submit" onClick={updateCustomer}>
        Update Profile
      </Button>

      {/* <Button className='sign-up-btn' href="#/login" variant="primary" type="submit" >
        Sign in
      </Button> */}
    </Form>
  </div>
  </Col>
  
</Row>

</Container>

            </div>
        </Container>
    </div>
  )
}
