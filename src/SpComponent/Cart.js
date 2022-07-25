import React from "react"
import "../style/Cart.css"

export default function Cart({cart}){
    return(
        <>
        
        {
          
            cart.cart.length === 0?
            <h1>Cart is Empty</h1>
            :cart.cart.map(ele =>{

                return(
                    <div className="hehe" key = {ele.id}> 
              <div className="size-card-box" >
                <div>
                <div className="card-img"><img src={ele.image} alt=""></img></div>
                <div className="card-cname"><h4>{ele.brand}</h4>(<span className="nn">{ele.aboutCloths}</span>)</div>
              </div>
              <div className="card-rate">
                                           <div>
                                            <span className="c-doller">Rs</span>
                                            <span className="c-paisa">{ele.price}</span>
                                            </div>
                                            <div>
                                            <del className="c-delete">Rs {ele.ActualPrice}</del>
                                            <span className="c-total-off">({ele.off} % off)</span>
                                            </div>
                                           
                                        </div>
                                        <div className="card-quantity">
                                               <div className="card-q"><h3>Quantity</h3></div>
                                               <div className="card-p-m">
                                              <button className="card-plus" onClick={() => cart.addToCart(ele)}>+</button>
                                              </div>
                                              <div className="card-p">Pcs {ele.quantity}</div>
                                              <div className="card-m-m">
                                              <button className="card-minus" onClick={() => cart.deleteToCart(ele)}>-</button>
                                              </div>

                                            </div>

                      <button onClick={()=>cart.removeCart(ele)}>delete from cart</button>
                      <div className="card-tprice">
                        <div className="card-aprice">Total Price</div>
                        <div className="card-dprice">{ele.price*ele.quantity}</div>
                      </div>
              </div>
              </div>
                
                )
            })
           

        }
        
        </>
    )
}