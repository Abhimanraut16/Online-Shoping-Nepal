import React from 'react'
import './Hero.css'
import './HeroMadia.css'
// import hand_icon from '../Assest/hand_icon.jpg'
// import arreow from '../Assest/arrow.jpg'
import shoe3 from '../Assest/hero_image.png'

function Hero() {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>


                <p>New</p>
                {/* <img src={hand_icon} alt="" /> */}

                <p>collection</p>
                <p>for everyoun</p>

                <div className="hero-latest-btn">
                    <div className="">Latest Collection</div>
                    {/* <img src={arreow} alt="" /> */}
                </div>
            </div>
            <div className="hero-right">
                <div className="image">
                    <img src={shoe3} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero