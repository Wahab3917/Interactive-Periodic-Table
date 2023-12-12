import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <>

    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <div className="logout-container">
        <button className="logout-button">Logout</button>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar