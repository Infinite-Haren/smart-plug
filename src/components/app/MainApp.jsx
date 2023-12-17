import React from "react";
import { useState } from "react";
import mainStyles from "../styles/main.module.css"
import { IoMdPower } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { LuPlug } from "react-icons/lu";
import { GoInfo } from "react-icons/go";
import PlugModular from "./PlugModular";
import { Page,usePageManager} from "./Page";
import TimerFunctionality from "./TimerFunctionality";
import SwitchFunctionality from "./SwitchFunctionality";
import StatFunctionality from "./StatFunctionality";
import ErrorManager from "./ErrorManager";
import Api from "./Api";
const defaultTabValue = [true,false,false,false]
const MainApp = ()=>{
const [activeTab,setActiveTab] = useState(0)
const [activePlugMod,setActivePlugMod] = useState(false)
ErrorManager.init();
return(
    <div className={mainStyles.tabContainer}>
        {activePlugMod&&<PlugModular active={activePlugMod} setActive={setActivePlugMod}/>}
        <div className={mainStyles.tabHeader}>
            <div className={mainStyles.title}>
                <Page index={0} actualActive={activeTab}>
                    Interrupteur
                </Page>
                <Page index={1}  actualActive={activeTab}>
                    Minuteur
                </Page>
                <Page index={2}  actualActive={activeTab}>
                    Statistiques
                </Page>
                <Page index={3}  actualActive={activeTab}>
                    Options
                </Page>   
            </div>
            <div className={mainStyles.plugContainer}>
                <div className={mainStyles.plugButton} onClick={()=>{
                    setActivePlugMod(true)
                }}>
                    <LuPlug size={20}/> Prise1
                </div>
            </div>
        </div>
        <div className={mainStyles.tabBody}>
            <Page index={0} actualActive={activeTab}>
                <SwitchFunctionality/>
            </Page>
            <Page index={1}  actualActive={activeTab}>
                <TimerFunctionality setActiveTab={setActiveTab}/>
            </Page>
            <Page index={2}  actualActive={activeTab}>
                <StatFunctionality bool={false}/>
            </Page>
            <Page index={3}  actualActive={activeTab}>
                <StatFunctionality/>
            </Page>
            {ErrorManager.error[1]&&<div className={mainStyles.errorModal} onClick={()=>{ErrorManager.setError(["erreur",false])}}>
                <div className={mainStyles.errorMess}>
                    {ErrorManager.error[0]}
                </div>
            </div>}
        </div>
        <div className={mainStyles.tabFooter}>
            
            <FooterButton activeTab={activeTab} setActiveTab={setActiveTab} state={0} active={activeTab[0]}/>
            <FooterButton activeTab={activeTab} setActiveTab={setActiveTab} state={1} active={activeTab[1]}/>
            <FooterButton activeTab={activeTab} setActiveTab={setActiveTab} state={2} active={activeTab[2]}/>
            <FooterButton activeTab={activeTab} setActiveTab={setActiveTab} state={3} active={activeTab[3]}/>
        </div>
    </div>
)
}

const FooterButton = ({children,activeTab,setActiveTab,state=0})=>{
    const active = activeTab==state;
    if(state==0){
        return(
            <div className={active?mainStyles.footerButtonActive:mainStyles.footerButton} onClick={()=>{
                setActiveTab(state)
            }}>
                <IoMdPower size={30} className={active?mainStyles.footerButtonColorActive:mainStyles.footerButtonColor}/>
            </div>
        )
    }
    else if(state==1){
        return(
            <div className={active?mainStyles.footerButtonActive:mainStyles.footerButton} onClick={()=>{
                setActiveTab(state)
            }}>
            <MdOutlineTimer size={30} className={active?mainStyles.footerButtonColorActive:mainStyles.footerButtonColor} />
            </div>
        )
    }
    else if(state==2){
        return(
            <div className={active?mainStyles.footerButtonActive:mainStyles.footerButton} onClick={()=>{
                setActiveTab(state)
            }}>
            <IoStatsChart size={20} className={active?mainStyles.footerButtonColorActive:mainStyles.footerButtonColor}/>
            </div>
        )
    }
    else if(state==3){
        return(
            <div className={active?mainStyles.footerButtonActive:mainStyles.footerButton} onClick={()=>{
                setActiveTab(state)
            }}>
            <GoInfo size={30} className={active?mainStyles.footerButtonColorActive:mainStyles.footerButtonColor}/>
            </div>
        )
    }  
}
const ChangeActive = (arr,i)=>{
    const new_arr = [...arr]
    for (let index = 0; index < new_arr.length; index++) {
        new_arr[index] = false;
    }
    new_arr[i] = true;
    return new_arr;
}
export default MainApp;