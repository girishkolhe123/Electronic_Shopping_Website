import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './footer.css'

export const FooterC = () => {
  return (
    <div className='footer-body'>
        <div className='list-body'>
          <label className='lbl'><b>Useful Links</b></label>
          <ul className='footer-list'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        <div className='list-body'>
          <label className='lbl'><b>Categories</b></label>
          <ul className='footer-list'>
            <li>TELEVISIONS</li>
            <li>LAPTOP</li>
            <li>MOBILE</li>
          </ul>
        </div>

        <div className='list-body'>
          <label className='lbl'><b>My Account</b></label>
          <ul className='footer-list'>
            <li>MY ACCOUNT</li>
            <li>ORDERS</li>
            <li>WISH LIST</li>
          </ul>
        </div>

        
        <div className='list-body'>
          <label className='lbl'><b>Help Desk</b></label>
          <ul className='footer-list'>
            <li>TERMS OF USE</li>
            <li>PRIVACY POLICY</li>
            <li>HELP/FAQ</li>
          </ul>
        </div>
        
    </div>
  )
}