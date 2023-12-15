import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
            <h2>WINTER COLLECTION IS OUT!</h2>
            <div>
                <p className='thunderp'>Rage Of Thunder Is Here.</p>
            </div><div className='latestbutton'>
            <button><Link style={{textDecoration:'none'}} to = '/product/3'><div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div></Link></button></div>
            </div>
            <div className="hero-right">
            {/* <img className='zeus' src={hero_image} height={540} width={700} alt="" /> */}
            </div>
        </div>
    )
}

export default Hero