import React from 'react'
import './item.css'
import './ItemMedia.css'
import { Link } from 'react-router-dom'
function Item(props) {
    return (
        <div className='item'>
            <Link to={`/ProductDetail/${props.id}`}>
                <img src={props.image} alt="" />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    {props.new_price}
                </div>
                <div className="item-price-old">
                    {props.old_price}
                </div>
            </div>
        </div >
    )
}

export default Item