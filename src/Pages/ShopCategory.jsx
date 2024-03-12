import React, { useContext } from 'react'
import './CSS/Shopcate/shopcate.css'
import './CSS/Shopcate/shopMadia.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Component/Assest/dropdown_icon.png'
import Item from '../Component/Item/Item'


function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          return null
        }
        )}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>

    </div>
  )
}

export default ShopCategory