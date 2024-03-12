import React from 'react'
import './breadcrum.css'
import arrow_icon from '../Assest/breadcrum_arrow.png'

function BreadsCrum(props) {
    const {ProductDetail} = props;
  return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt="" /> ,
        Shop <img src={arrow_icon} alt="" />,
        {ProductDetail.category} <img src={arrow_icon} alt="" />
        {ProductDetail.name}
        
    </div>
  )
}

export default BreadsCrum