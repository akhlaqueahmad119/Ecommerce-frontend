import React, {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Subheader from "./component/Subheader";
import Body from "./component/Body";
import MenWomen from "./component/MenWomen";
import MenCart from "./component/MenCart.js"
import ShirtComp from "./SpComponent/ShirtComp";
import PantComp from "./SpComponent/PantComp";
import Cart from "./SpComponent/Cart";



function App() {
  let [inputstate, setinputstate] = useState("");
  let [cart, setCart] = useState([]);
  
  function addToCart(product) {

    const productinCart = cart.find((ele) => {
      return (ele.id === product.id)
    });

    //  console.log(product)
    if (productinCart) {
      if (productinCart.quantity < product.totalquantity) {
        setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele));
        console.log(cart)
      }
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  function deleteToCart(product) { 
    const productinCarttoDelete = cart.find((ele) => ele.id === product.id);
     console.log(productinCarttoDelete);
      if (productinCarttoDelete.quantity === 1) { 
        setCart(cart => cart.filter(ele => ele.id !== productinCarttoDelete.id )) 
      } else{ 
      setCart(cart.map((ele) => ele.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity - 1 } : ele)) } }
  function removeCart(product) {
    setCart(cart.filter(ele => ele.id !== product.id))
  }


 

     
  return (
    <BrowserRouter>
      <Header  setinputstate = {setinputstate}/>
      <Subheader  cart = {cart}/>
      {/* <Body/> */}
   
    <Routes>
      <Route path="/" element={<Body/>}/>
    
         <Route path="/MenWomen" element={<MenWomen />} />
        <Route path="/MenCart" element = {< MenCart inputstate = {{inputstate,addToCart}}/>} />
        <Route path="/ShirtComp" element={< ShirtComp shirt = {addToCart}/>} />  
        <Route path="/PantComp" element={< PantComp  pant = {addToCart} />} />  
        <Route path="/Cart" element={< Cart  cart = {{cart,inputstate,deleteToCart,removeCart,addToCart}}/>} />  
  
    </Routes>
  </BrowserRouter>
  );
}

export default App;
