
import "../style/Body.css"
import React from "react"
import { Link } from "react-router-dom"


export default function Body(){
    return(
        <div className="main-pic">
            <div className="immg"><img src="../images/fashion.jpg" alt=""/></div>
            <div className="order-now">
            <div className="m-coll">Men Collection 2022</div>
            <div className="new-arrival"><h1>NEW ARRIVALS</h1></div>
            <div className="shop-now">
                <Link to = "/MenWomen" style={{ color: "white", textDecoration: "none" }}>SHOP NOW</Link>
            </div>
            </div>
        </div>
    )
}