import React from "react";
import { useState,useEffect } from "react";
import switchStyle from "../styles/switch.module.css"
import Api from "./Api";
const SwitchFunctionality = ()=>{
const [state,setState] = useState(localStorage.getItem("switch")==null?false: JSON.parse(localStorage.getItem("switch")).value);
const [loading,setLoading] = useState(true);
useEffect(()=>{
    setLoading(true)
    Api.GetInfo((info)=>{
        console.log(info.result.status.switch);
        setState(info.result.status.switch)
        setLoading(false)
    },Api.defaultPlug);
},[])
    return(
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className={state?switchStyle.containerON:switchStyle.containerOFF} onClick={()=>{
                Api.Switch(!state,Api.defaultPlug);
                setState((prev)=>(!prev))
                }}>
                {!loading&&<div className={state?switchStyle.movableON:switchStyle.movableOFF}>
                   {state?"ON":"OFF"}
                </div>}
            </div>
        </div>
    )
}
export default SwitchFunctionality;