
import React from "react";
import object from "../component/Object.js"
import Pant from "./Pant.js";

export default function PantComp({pant}){
    let pantpart = object.filter((ele) =>{
        return(
            ele.type === "pant"
        )
    })
    return(
       <Pant data = {{pantpart,pant}} />
    )
}