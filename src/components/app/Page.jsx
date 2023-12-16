import React from "react";
import { useState } from "react";
const Page = ({index,actualActive,children})=>{
    return(
        index==actualActive&&<div style={{width:"100%",height:"100%"}}>
            {children}
        </div>
    )
}
const usePageManager = (initial,pageNumber)=>{

    const [authState,setAuthState] = useState(initial);
    function set(cmd,value=0){
        if(cmd==1) {
            setAuthState(calcPAge(authState+1,pageNumber));
        }
        else if(cmd==-1) {
            setAuthState(calcPAge(authState-1,pageNumber));
        }
        else{
            setAuthState(calcPAge(value,pageNumber));
        }
    }
    
    function calcPAge(value,lim){
        if(value>lim-1){
            return lim-1
        }
        else if(value<0){
            return 0
        }
        else{
            return value
        }
    }
    return [authState,set]
}
export {Page,usePageManager};