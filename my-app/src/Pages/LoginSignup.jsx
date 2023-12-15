import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input className='in' type="text" placeholder='Your Name' />
          <input className='in' type="email" placeholder='Email Address' />
          <input className='in' type="password" placeholder='Password' />
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;