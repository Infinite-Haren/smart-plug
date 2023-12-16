import React from "react";
import { useState } from "react";
import switchStyle from "../styles/switch.module.css"
const SwitchFunctionality = ()=>{
const [state,setState] = useState(false);
    return(
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className={state?switchStyle.containerON:switchStyle.containerOFF} onClick={()=>{setState((prev)=>(!prev))}}>
                <div className={state?switchStyle.movableON:switchStyle.movableOFF}>
                   {state?"ON":"OFF"}
                </div>
            </div>
        </div>
    )
}
export default SwitchFunctionality;