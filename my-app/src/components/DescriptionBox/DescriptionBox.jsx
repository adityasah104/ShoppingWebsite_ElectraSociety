import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            {/* <div className="descriptionbox-nav-box fade">Reviews (122)</div> */}
        </div>
        <div className="desciptionbox-description">
            <p><b>Payment Methods -</b> G-pay, PhonePe, Paytm.</p>
            <p><b>P.s. -</b> Insert Screenshot of the payment in the G-form</p>
        </div>
    </div>
  )
}

export default DescriptionBox