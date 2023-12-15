import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} className='footerlogo' />
            <p>ELECTRA SOCIETY</p>
        </div>
        <ul className='footer-links'>
            <a target='blank' href="http://www.electranits.com/#home"><li>Address</li></a>
            <a target='blank' href="http://www.electranits.com/#home"><li>About</li></a>
            <a target='blank' href="http://www.electranits.com/#home"><li>Contact</li></a>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a target='blank' href="https://www.instagram.com/electrasociety?igshid=OGQ5ZDc2ODk2ZA=="><img src={instagram_icon} alt="" /></a>
            </div>
            <div className="footer-icons-container">
               <a target='blank' href="https://www.facebook.com/electra.nits"> <img src={pintester_icon} alt="" /></a>
            </div>
            <div className="footer-icons-container">
                <a target='blank' href="https://www.linkedin.com/company/electrical-engineering-society-nit-silchar/mycompany/"><img src={whatsapp_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 -All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer