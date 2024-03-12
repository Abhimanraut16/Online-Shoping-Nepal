import React from 'react'
// import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
// import BreadsCrum from '../Component/BreadsCrum/BreadsCrum';
import all_product from '../Component/Assest/all_product';

function ProductDetail() {
    // const{all_product} = useContext(ShopContext);
    const {id} = useParams();
    const ProductDetail = all_product.find((e)=> e.id == id)
    // console.log(ProductDetail);
  return (
    <div>
      <img src={ProductDetail.image} alt="" />
      
      
        {/* <BreadsCrum ProductDetailId={ProductDetail}/> */}
    </div>
  )
}

export default ProductDetail