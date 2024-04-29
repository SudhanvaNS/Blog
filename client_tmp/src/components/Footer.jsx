import React from 'react'
import logo from '../img/profile_pic.webp';
export default function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt ="be happy"></img>
      <span> made with ♡ and R<b>React.js</b> </span>
    </div>
  )
}
