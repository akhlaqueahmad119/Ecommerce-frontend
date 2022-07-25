import "../style/Subheader.css"
import React from "react"
import { Link } from "react-router-dom"


export default function Subheader({cart}){
    return(
        <div className="main-subheader">
           <div className = "c-name"><h1>FineLook</h1></div>
           <div className ="about-shop">
                <div className="home"><h5>
                    <Link to = "/" style={{ color: "rgb(12, 83, 65)", textDecoration: "none" }}>HOME</Link>
                    </h5></div>
                <div className="shop"><h5>SHOP</h5></div>
                <div className="blog"><h5>
                    <Link to = "/ShirtComp" style={{color: "rgb(12, 83, 65)",textDecoration:"none"}}>Shirt</Link>
                    </h5></div>
                <div className="pages"><h5>
                    <Link to = "/PantComp" style={{color: "rgb(12, 83, 65)",textDecoration:"none"}}>Pant</Link>
                    </h5></div>
                <div className="contact"><h5>CONTACT</h5></div>

           </div >
           <div className = "cart-s">
              <div><i class='fa fa-paypal'></i></div>
              <div><i class="fa fa-bell-o"></i></div>
              <div><i className="fa fa-heart-o"> </i></div>
              <div className="fafasc">
                <div className="carthai">
                    <Link to= "/Cart" style={{color:" rgb(12, 83, 65)",textDecoration:"none"}}><i class="fa fa-shopping-cart"></i></Link>
                </div>
                <div className="totalno">{cart.length}</div>
                </div>
           </div>

        </div>
    )
}