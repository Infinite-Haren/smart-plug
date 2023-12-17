import React from "react";
import { useState,useRef,useEffect } from "react";
import plugstyles from "../styles/plugModular.module.css"
import { MdAdd } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import Api from "./Api";
const PlugModular = ({active,setActive})=>{
    const [addActive,setAddActive] = useState(false);
    const [allPlug,setAllPlug] = useState([])
    useEffect(()=>{
        if(localStorage.getItem("plug-list")!=null){
            setAllPlug(JSON.parse(localStorage.getItem("plug-list")))
        }
    },[])
    return(
        active&&<div className={plugstyles.container}>
            <AddPlugModal active={addActive} setActive={setAddActive} setAllPlug={setAllPlug}/>
            <div className={plugstyles.header}>
                <div className={plugstyles.addButton} onClick={()=>{setAddActive(true)}}><MdAdd size={20}/>Ajouter prise</div>
                <div className={plugstyles.exit} onClick={()=>{setActive(false)}}><IoCloseOutline size={25} color={"black"}/></div>
            </div>
            <div className={plugstyles.body}>
                {
                    allPlug.map((value)=>(<PlugItem name={value.name} id={value.id}/>))
                }
              
            </div>
            <div className={plugstyles.footer}>

            </div>
        </div>
    )
}
const PlugItem = ({name,id})=>{
    return(
        <div className={plugstyles.item}>
            <div className={plugstyles.title}>{name}</div>
            <div className={plugstyles.id}>{id}</div>
        </div>
    )
}
const AddPlugModal = ({active,setActive,setAllPlug})=>{
    const nameRef = useRef()
    const idRef = useRef()
    return(
        active&&<div className={plugstyles.addContainer}>
            <div className={plugstyles.cleanheader}>
                <div className={plugstyles.exit} onClick={()=>{setActive(false)}}><IoCloseOutline size={25} color={"black"}/></div>
            </div>
            <div className={plugstyles.body}>
             
                <div className={plugstyles.label}>ID de la prise</div>
                <input ref={idRef} type="text" className={plugstyles.input}/>
                <div className={plugstyles.linkButton} onClick={()=>{
                    //Api.GetInfo()
                    const list = localStorage.getItem("plug-list")
                    if(list==null){
                        localStorage.setItem("plug-list",JSON.stringify([{name:nameRef.current.value,id:idRef.current.value}]))
                    }
                    else{
                        const newArr = [...(JSON.parse(list))]
                        newArr.push({name:nameRef.current.value,id:idRef.current.value})
                        localStorage.setItem("plug-list",JSON.stringify(newArr))
                    }
                    setAllPlug(JSON.parse(localStorage.getItem("plug-list")))
                }}>Enregistrer</div>
            </div>
            <div className={plugstyles.footer}>

            </div>
        </div>
    )
}
export default PlugModular