import React, { useState } from "react";
import { useRef } from "react";
import timerStyles from "../styles/timer.module.css"
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Api from "./Api";
const TimerFunctionality = ({setActiveTab})=>{
    const secRef =useRef()
    const [goal,setGoal] = useState(true)
    const [play,setPlay] = useState(false)
    const [time,setTime] = useState(10)
    const renderTime = ({ remainingTime }) => {
        if (remainingTime == 0) {
          return <div className={timerStyles.go} onClick={()=>{
          
          }}>Terminer</div>;
        }
        if(play){
            return (
                  <div className={timerStyles.remaining}>{remainingTime} s</div>
              );
        }
        else{
            return (
                <div className="timer">
                  <div className={timerStyles.go} onClick={()=>{setPlay(true)}}>GO</div>
                </div>
              );
        }
        
      };
    return(
        <div className={timerStyles.container}>
            <div className={timerStyles.reglageContainer}>
                <div className={timerStyles.goalChoice} onClick={()=>{setGoal((prev)=>(!prev))}}>{goal?"Allumer":"Eteindre"}</div>
                <div className={timerStyles.dans}>dans</div>
                <div className={timerStyles.inputContainer}>
                    <input ref={secRef} type={"number"} defaultValue={10} className={timerStyles.input} onChange={(e)=>{setTime(e.target.value)}}/>
                    <div className={timerStyles.unit}>seconde(s)</div>
                </div>
            </div>
            
            <CountdownCircleTimer
                isPlaying = {play}
                duration={time}
                colors={["#03a9fc", "#03a9fc", "#03a9fc", "#03a9fc"]}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => { setPlay(false);Api.Switch(goal,()=>{setActiveTab(0)}) ; return{ shouldRepeat: false, delay: 1 }}}
                >
                {renderTime}
                </CountdownCircleTimer>
        </div>
    )
}
export default TimerFunctionality;