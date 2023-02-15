import React from 'react'
import './header.css'
import Logo from '../asset/Logo.png'
function Header() {
  return (
    <div className='header p-3  text-center'>
      <img src={Logo} alt="MainLogo" /> Culinary kitchen
    </div>
  )
}

export default Header