
import React from "react";


export default function Pant({data}){
    
    
    return(
        <>
           <div className="main-boxx">
          {
            data.pantpart.map((ele)=>{
                return(
                    <div className="men-cart" key={ele.id}>
                    <div className="men-pic">
                        <img src= {ele.image} alt="" />
                    </div>
                    <div className="men-lcart">
                        <div className="brand-name"><h3>{ele.brand}</h3></div>
                        <div className="about-clothes">{ele.aboutCloths}</div>
                        <div className="star-men">
                            <span className="s-1"><i class="fa fa-star" aria-hidden="true"></i></span>
                            <span className="s-2"><i class="fa fa-star" ></i></span>
                            <span className="s-3"><i class="fa fa-star" ></i></span>
                            <span className="s-4" ><i class="fa fa-star-half-full" ></i></span>
                            <span><i class="fa fa-star-o" ></i></span>
                            <span><i class="fa fa-star-o" ></i></span>
        
                        </div>
                        <div className="men-sp">
                            <div className="pricee">
                            <span className="rs">Rs</span>
                            <span className="actual-p">{ele.price}</span>
                            </div>
                            <div className="total-p"><del> Rs {ele.ActualPrice}</del></div>
                            <div>({ele.off} % off)</div>
        
                        </div>
                        <div className="addtocart">
                            <button onClick={()=>{data.pant(ele)}}>Add to Cart</button>
                        </div>
        
                    </div>
        
        
                </div>
                )
            })
          }
          </div>
        </>
    )
}