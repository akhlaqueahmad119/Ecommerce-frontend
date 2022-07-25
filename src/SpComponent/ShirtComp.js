
import React from "react"
import object from "../component/Object.js"
import Shirt from "./Shirt.js";


export default function ShirtComp({shirt}){
    let shirtpart = object.filter((ele) =>{
        return(
            ele.type === "shirt"
        )
    })
    return(
        <Shirt data = {{shirt,shirtpart}}/>
    )
}