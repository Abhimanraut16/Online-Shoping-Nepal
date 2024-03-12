import React, { useRef, useState } from 'react'
import './Navbar.css'
import './medea.css'
import logo from '../Assest/shopping logo.png'
import icon from '../Assest/icon.png'
import { Link } from 'react-router-dom';
import nav_dropdown from '../Assest/dropdown_icon.png'

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <div className="img"> <img src={logo} alt="Shopping logo" /></div>
        {/* <img src="src\Component\Assest\shopping logo.png" alt="" /> */}
        <p> .Sho<span>pper</span></p>
      </div>
      {/* <img src={nav_dropdown} onClick={dropdown_toggle} className='nav-dropdown' alt="" /> */}
      <ul ref={menuRef} className='nav-menu'>
        {/* <li onClick={() => { setMenu("shop") }}><Link to="/" >Shop </Link>{menu === "shop" ? <hr /> : <></>}</li> */}
        <li onClick={() => { setMenu("shop") }}><Link to="/" >Shop </Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}> <Link to="/mens">Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to="/womens">Women </Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}> <Link to="/kids">Kids </Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <div className="image">
          <Link to='/cart'><img src={icon} alt="Shopping icon" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>

    </div>
  )
}

export default Navbar