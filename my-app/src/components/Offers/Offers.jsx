import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import { Link } from 'react-router-dom'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Merchandise</h1>
        <p>Limited Customers Only!!</p>
        <Link to = '/product/4'><button>Check Now</button></Link>
        </div>
        <div className="offers-right">
        <img className='eximg' src={exclusive_image} width={740} height={550} alt="" />
        </div>
    </div>
  )
}

export default Offers