import React from 'react'
import './footer.css'
import './footerMadia.css'
import footer_logo from '../Assest/logo_big.png'
import instragrem_icon from '../Assest/instagram_icon.png'
import pintester_icon from '../Assest/pintester_icon.png'
import whatsapp_icon from '../Assest/whatsapp_icon.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="socail-icon">
                <div className="footer-icons">
                    <img src={instragrem_icon} alt="" />
                </div>
                <div className="footer-icons">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons">
                    <img src={whatsapp_icon} alt="" />
                </div>

            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024</p>
            </div>
        </div>
    )
}

export default Footer