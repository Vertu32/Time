import React, { useEffect, useState } from "react";
import MyButton from "../UI/MyButton";
import Input from "../UI/Input"


const Timer = function() {

    


    const [ milliseconds, setMilliseconds ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ hours, setHoures ] = useState(0);
    const [ timerActive, setTimerActive ] = useState(false);
    const [ startTime, setStartTime ] = useState(false)


    const clickFnc = function() {
        setTimerActive(!timerActive)
    }
    
    const endTime = function() {
        setTimerActive(false)
        setHoures(0)
        setMinutes(0)
        setSeconds(0)
        setTimeout(() => {
            setMilliseconds(0)
        }, 10)
    }

    const reload = function() {
        setStartTime(false)
        setHoures(0)
        setMilliseconds(0)
        setMinutes(0)
        setSeconds(0)
    }

    const startFnc = function (e) {
        e.preventDefault()
        setStartTime(true)
    }

    useEffect(()=> {
        if(startTime) {
            if(seconds>=60) {
                setSeconds(seconds-60)
                setMinutes(minutes+1)
            } if(minutes>=60) {
                setMinutes(minutes-60)
                setHoures(hours+1)
            }
        }
        if(timerActive) {

            var timeRun = setTimeout(() => {
                if(milliseconds>0) {
                  setMilliseconds(milliseconds-1)
                } else {
                    if(seconds || minutes || hours) {
                        setMilliseconds(99)
                        setSeconds(seconds-1)
                    }
                  
                }
              if(seconds<0) {
                setSeconds(59)
                setMinutes(minutes-1)
              }
              if(minutes<0) {
                setMinutes(59)
                setHoures(hours-1)
              } if(hours<0){
                  setHoures(0)
              }
              if(milliseconds<=0 && seconds <=0 && minutes <= 0 && hours<=0) {
                  setTimerActive(false)
                  setMilliseconds(0)
                  setSeconds(0)
                  setMinutes(0)
                  setHoures(0)
              }
              }, 10)
        } else {
            window.clearTimeout(timeRun)
            setTimerActive(false)

        }
    }, [milliseconds, timerActive, startTime, seconds, minutes])

    let h = hours.toLocaleString('en-US', {
        minimumIntegerDigits: 2, 
        useGrouping: false
      })
     let m = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2, 
        useGrouping: false
      })
    let s = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2, 
        useGrouping: false
      })
    let ms = milliseconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2, 
        useGrouping: false
      })



   

    return (
        <div className="timer__wrap">
            
            <div className="block__time block__time_timer">
                {startTime
                    ? <div>
                                <div className="text__block">
                                {h}:{m}:{s}:{ms}
                            </div>
                            <div className="buttons_block">
                                <MyButton click={clickFnc}>{timerActive 
                                    ?<img src="https://img.icons8.com/material-rounded/75/000000/pause.png"/>
                                    :<img src="https://img.icons8.com/ios-glyphs/60/000000/play--v2.png"/> }</MyButton>
                                <MyButton click={endTime}><img src="https://img.icons8.com/material-rounded/73/000000/stop.png"/></MyButton>
                                <MyButton click={reload}><img src="https://img.icons8.com/fluency-systems-filled/60/000000/hexagon-reload.png"/></MyButton>
                        </div>
                    </div>
                    : <form className="start__block">
                        <div className="input__block">
                            <Input val={hours} place='Hours' fnc={e =>{setHoures(e.target.value)}} />
                            <Input val={minutes} place='Minutes' fnc={e =>{setMinutes(e.target.value)}} />
                            <Input val={seconds} place='Seconds' fnc={e =>{setSeconds(e.target.value)}}/>
                        </div>
                        <MyButton click={startFnc}><img src="https://img.icons8.com/ios-glyphs/50/000000/chain-start.png"/></MyButton>
                    </form>  
                     }
                    
          </div>
        </div>
    )   

}


export default Timer;