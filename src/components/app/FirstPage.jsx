import React from "react";
import { useRef } from "react";
import firstStyles from "../styles/first.module.css"
import { GoPlug } from "react-icons/go";
import Api from "./Api";
const FirstPage = ({setAccess})=>{
    const iref = useRef()
    return(
        <div className={firstStyles.container}>
                <GoPlug size={100} color={"rgb(100, 177, 201)"}/>
                <div className={firstStyles.text}>Ajouter une prise connecté</div>
                <input ref = {iref} type="text" className={firstStyles.input} placeholder={"ID"}/>
                <div className={firstStyles.btn} onClick={()=>{
                    localStorage.setItem("default-plug",iref.current.value)
                    setAccess(false);
                }}>continuer</div>
        </div>
    )
}
export default FirstPage