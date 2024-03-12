import React from 'react'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Navbar from './Component/Navbar/Navbar'
// import ProductDe from './Pages/Product'
import ProductDetail from './Pages/ProductDetail'
// import ProductDetailId from './Pages/ProductDetails'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import men_banner from './Component/Assest/banner_mens.png'
import women_banner from './Component/Assest/banner_women.png'
import kid_banner from './Component/Assest/banner_kids.png'
// import LoginSignup from './Pages/LoginSignup'

function App() {
  return (
    <div>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/mens' element={<ShopCategory banner={men_banner} category ="men"/>}/>
  <Route path='/womens' element={<ShopCategory banner = {women_banner} category ="women"/>}/>
  <Route path='/kids' element={<ShopCategory banner={kid_banner} category ="kid"/>}/>
  <Route path='/ProductDetail/:id' element={<ProductDetail/>}/>
  <Route path=':ProductDetailId' element={<ProductDetail/>}/>
  {/* <Route path='/ProductId' element={<ProductDetail/>}/> */} 
  {/* <Route path='/Product_detail' element={<ProductDetail/>} /> */}
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
</Routes>
<Footer/>
</BrowserRouter>
      
     
    </div>
  )
}

export default App