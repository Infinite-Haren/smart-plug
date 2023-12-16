import React from "react";
import { useState } from "react";
import mainStyles from "../styles/main.module.css"
import { IoMdPower } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { Page,usePageManager} from "./Page";
import SwitchFunctionality from "./SwitchFunctionality";
const defaultTabValue = [true,false,false,false]
const MainApp = ()=>{
const [activeTab,setActiveTab] = useState(0)


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("developerId", "-Nlm3ZA2Xaf1K4W8rMGy");
urlencoded.append("email", "anjaharen@gmail.com");
urlencoded.append("deviceId", "bfc988f7c703c0d698hjlc");
urlencoded.append("switch_status", "ON");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://us-central1-boulou-functions-for-devs.cloudfunctions.net/boulou_switch_device", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



return(
    <div className={mainStyles.tabContainer}>
        <div className={mainStyles.tabHeader}>
            <div className={mainStyles.title}>
                <Page index={0} actualActive={activeTab}>
                    Interupteur
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
            
        </div>
        <div className={mainStyles.tabBody}>
            <Page index={0} actualActive={activeTab}>
                <SwitchFunctionality/>
            </Page>
            <Page index={1}  actualActive={activeTab}>
                MINUTEUR
            </Page>
            <Page index={2}  actualActive={activeTab}>
                STAT
            </Page>
            <Page index={3}  actualActive={activeTab}>
                SETTINGS
            </Page>
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
                <IoMdPower size={40} className={active?mainStyles.footerButtonColorActive:mainStyles.footerButtonColor}/>
            </div>
        )
    }
    else if(state==1){
        return(
            <div className={active?mainStyles.footerButtonActive:mainStyles.footerButton} onClick={()=>{
                setActiveTab(state)
            }}>
            <MdOutlineTimer size={40} className={active?mainStyles.footerButtonColorActive:mainStyles.footerButtonColor} />
            </div>
        )
    }
    else if(state==2){
        return(
            <div className={active?mainStyles.footerButtonActive:mainStyles.footerButton} onClick={()=>{
                setActiveTab(state)
            }}>
            <IoStatsChart size={30} className={active?mainStyles.footerButtonColorActive:mainStyles.footerButtonColor}/>
            </div>
        )
    }
    else if(state==3){
        return(
            <div className={active?mainStyles.footerButtonActive:mainStyles.footerButton} onClick={()=>{
                setActiveTab(state)
            }}>
            <IoSettingsOutline size={40} className={active?mainStyles.footerButtonColorActive:mainStyles.footerButtonColor}/>
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