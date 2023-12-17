import React from "react";
import { useState } from "react";
import { ChartPage } from "./ChartPage";
import RealtimeDataPage from "./RealtimeDataPage";
import chartStyles from "../styles/chart.module.css"
const StatFunctionality = ({bool=true})=>{
    const [state,setState] = useState(0);
    return(
        <div className={chartStyles.chartContainer}>
            <div className={chartStyles.body}>
                {
                    bool?<RealtimeDataPage/>:<ChartPage labelS = {state}/>
                }
            </div>
            {!bool&&<div className={chartStyles.footer}>
                <div className={chartStyles.axisyFilter} onClick={()=>{
                    setState((prev)=>{
                        return  (prev+1)%4
                    })
                }}>
                    {Mot(state)}
                </div>
            </div>}
        </div>
    )
}
const Mot = (state)=>{
    if(state==0){
        return "Annuel"
    }
    else if(state==1){
        return "Mensuel"
    }
    else if(state==2){
        return "Journalier"
    }
    else if(state==3){
        return "Par heure"
    }
}
export default StatFunctionality  
