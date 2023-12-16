import React from "react";
import { useState,useEffect } from "react";
import switchStyle from "../styles/switch.module.css"
import Api from "./Api";
const SwitchFunctionality = ()=>{
const [state,setState] = useState(false);
useEffect(()=>{
    console.log("2");
    Api.GetInfo((info)=>{
        console.log(info.result.status.switch);
        setState(info.result.status.switch)
    });
},[])
    return(
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className={state?switchStyle.containerON:switchStyle.containerOFF} onClick={()=>{
                Api.Switch(!state);
                setState((prev)=>(!prev))
                }}>
                <div className={state?switchStyle.movableON:switchStyle.movableOFF}>
                   {state?"ON":"OFF"}
                </div>
            </div>
        </div>
    )
}
export default SwitchFunctionality;