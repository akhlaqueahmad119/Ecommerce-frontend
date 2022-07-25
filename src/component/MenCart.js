import "../style/MenCart.css"
import React from "react"
import object from "./Object.js"

function MenCart({inputstate}) {
    let filteredData = object.filter(ele => ele.type.includes(inputstate.inputstate.toLowerCase()))
    return (
          <>
           <div className="main-boxx" >
          {
              filteredData.length === 0 ?
            object.map( (ele) => {
                return(
                    <div className="men-cart"  key = {ele.id}>
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
                            <button onClick={() => inputstate.addToCart(ele) }>Add to Cart</button>
                        </div>
        
                    </div>
        
        
                </div>
                )
            }):filteredData.map((ele) =>{
                return(
                    <div className="men-cart"  key = {ele.id}>
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
                            <button onClick={() => inputstate.addToCart(ele) }>Add to Cart</button>
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
export default MenCart;













// function MenCart() {
//     return (
//         <div className="men-cart">
//             <div className="men-pic">
//                 <img src="../images/p1.jpg" alt="" />
//             </div>
//             <div className="men-lcart">
//                 <div className="brand-name"><h3>Levi's</h3></div>
//                 <div className="about-clothes">Men's Skinny Jean</div>
//                 <div className="star-men">
//                     <span className="s-1"><i class="fa fa-star" aria-hidden="true"></i></span>
//                     <span className="s-2"><i class="fa fa-star" ></i></span>
//                     <span className="s-3"><i class="fa fa-star" ></i></span>
//                     <span className="s-4" ><i class="fa fa-star-half-full" ></i></span>
//                     <span><i class="fa fa-star-o" ></i></span>
//                     <span><i class="fa fa-star-o" ></i></span>

//                 </div>
//                 <div className="men-sp">
//                     <div className="pricee">
//                     <span className="rs">Rs</span>
//                     <span className="actual-p">500</span>
//                     </div>
//                     <div className="total-p"><del> Rs 999</del></div>
//                     <div>(30 % off)</div>

//                 </div>
//                 <div className="addtocart">
//                     <button>Add to Cart</button>
//                 </div>

//             </div>


//         </div>
//     )
// }