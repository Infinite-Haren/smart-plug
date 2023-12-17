import React from "react";
import { useState } from "react";
class ErrorManager{
    static error;
    static setError;
    static errVis;
    static setErrVis;
    static init = ()=>{
        [this.error,this.setError] = useState(["ERROR",false])
        [this.errVis,this.setErrVis] = useState(false) 
    }
}
export default ErrorManager;