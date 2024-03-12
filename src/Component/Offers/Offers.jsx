import React from 'react'
import "./offers.css"
import "./offerMadia.css"
// import exclusive_image from "../Assest/exclusiv_image.png"
import exclusive_image from "../Assest/exclusive_image.png"
function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            {/* <Button>Check Now</Button> */}
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers