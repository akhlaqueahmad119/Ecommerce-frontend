import "../style/Header.css"
import React from "react";


// import {Link } from "react-router-dom";

 export default function Header({setinputstate}){
         function onSearch(event){
          
         let {value}  = event.target
         setinputstate(value)
          
         }
    return(
        <div  className="main-header" >
           <div className="header-1">
             <div className="call-us">CALL US </div>
             <div className="phone-num">+917987557295</div>
             <div className="input-serch"><input className="input-serch" type= "text" placeholder="SEARCH YOUR PRODUCT HERE" onChange={onSearch}></input></div>
           </div>
           <div className="header-2">
            <div className="login-r">LOGIN/REGISTER</div>
              
            <div className="c-account">MY ACCOUNT</div>
            <div className="contact-us">CONTACT US</div>
           </div>

        </div>
    )
}