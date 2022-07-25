import "../style/MenWomen.css"
import React from "react";

import {Link } from "react-router-dom";
export default function MenWomen(){
    return(
      <div className="main-cart">
         <div className="img-cart"><img src="../images/pic2.jpg" alt="pic"/></div>
            <div className="cartt">
                <div className="cart-men">
                  <Link to = "/MenCart" style={{ color: "rgb(68, 114, 68)", textDecoration: "none" }}>Men</Link>
                </div>
                <div className="cart-women">Women</div>
            </div>

      </div>
    )
}