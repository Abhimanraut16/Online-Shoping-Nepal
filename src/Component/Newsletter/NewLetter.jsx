import React from 'react'
import './newletter.css'
import './newlatterMadia.css'

function NewLetter() {
  return (
    <div className='newletter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div className="medeia">
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default NewLetter