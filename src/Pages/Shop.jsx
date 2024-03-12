
import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offers from '../Component/Offers/Offers'
import NewCollection from '../Component/NewCollection/NewCollection'
import NewLetter from '../Component/Newsletter/NewLetter'
import Footer from '../Component/Footer/Footer'
// import NewCollection from '../Component/NewCollection/NewCollection'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      {/* <NewCollection/> */}
      <NewCollection/>
      <NewLetter/>
      {/* <Footer/> */}
    </div>
  )
}

export default Shop