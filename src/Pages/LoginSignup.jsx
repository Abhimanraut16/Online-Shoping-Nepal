import React from 'react'
import './CSS/loginsidnup/loginsignup.css'
import './CSS/loginsidnup/loginMadia.css'

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="Email" placeholder='your Email' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing i agree to the terms of use & </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup