import React from "react";
import { useEffect,useState } from "react";
import Api from "./Api";
import chartStyles from "../styles/chart.module.css";
const RealtimeDataPage = ()=>{
const [info,setAllInfo] = useState(null);
useEffect(()=>{
Api.GetInfo((info)=>{
setAllInfo(info);
},Api.defaultPlug)
},[])
    return(
        info!=null&&<div className={chartStyles.chartContainer}>
            <InfoElement nkey={"Nom"} value={info.result.name}/>
            <InfoElement nkey={"Id"} value={info.result.id}/>
            <InfoElement nkey={"Etat"} value={info.result.status.switch?"ON":"OFF"}/>
            <InfoElement nkey={"Intensité"} value={info.result.status.actual_current}/>
            <InfoElement nkey={"Voltage"} value={info.result.status.actual_voltage}/>
            <InfoElement nkey={"Puissance"} value={info.result.status.actual_power}/>
        </div>
    )
}
const InfoElement = ({nkey,value})=>{
    return(
        
            <div className={chartStyles.infoElement}>
                <div className={chartStyles.label}>{nkey}: </div>
                <div className={chartStyles.info}>{value}</div>
            </div>
        
    )
}
export default RealtimeDataPage