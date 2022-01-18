import React, { useEffect, useState } from "react";
import '../../styles/style.css'
import TimeList from "../TimeList";
import MyButton from '../UI/MyButton'

function Seconds() {

  const [times, setTimes] = useState([])
  const [ milliseconds, setMilliseconds ] = useState(0);
  const [ seconds, setSeconds ] = useState(0);
  const [ minutes, setMinutes ] = useState(0);
  const [ hours, setHoures ] = useState(0);
  const [ timerActive, setTimerActive ] = useState(false);


  const clickFnc = function() {
   setTimerActive(!timerActive)
  }

  const endTime = function() {
    setTimerActive(false)
    setTimeout(() => {
      setTimes([])
      setSeconds(0)
      setMilliseconds(0)
      setMinutes(0)
      setHoures(0)
    }, 10)
  }


  


  useEffect(() => {
    if(timerActive) {
      
      var timeRun = setTimeout(() => {
          if(milliseconds<99) {
            setMilliseconds(milliseconds+1)
          } else {
            setMilliseconds(0)
            setSeconds(seconds+1)
          }
        if(seconds>59) {
          setSeconds(0)
          setMinutes(minutes+1)
        }
        if(minutes>59) {
          setMinutes(0)
          setHoures(hours+1)
        }
        }, 10)
        
      } else {
        window.clearTimeout(timeRun)
        
      }
      
    }, [milliseconds, timerActive])

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

    const fixedTime = function () {
      const newList = {msec: ms, sec: s, min: m, hou: h}

      setTimes([...times, newList])
    }

  return (
    <div>
      <div className="wrapper">
          <div className="block__time">
            <div className="text__block">
              {h}:{m}:{s}:{ms}
            </div>
            <div className="buttons_block">
              <MyButton click={clickFnc}>{timerActive 
                  ?<img src="https://img.icons8.com/material-rounded/75/000000/pause.png"/>
                  :<img src="https://img.icons8.com/ios-glyphs/60/000000/play--v2.png"/> }</MyButton>
              <MyButton click={endTime}><img src="https://img.icons8.com/material-rounded/73/000000/stop.png"/></MyButton>
              <MyButton click={fixedTime}><img src="https://img.icons8.com/windows/55/000000/checklist.png"/></MyButton>
            </div>
          </div>
          <div className="block__timeLists">
            {times.map((el) => {
              return <TimeList key={el.msec} fix={el} ind={times.indexOf(el)}/>}
            )}
          </div>
      </div>
    </div>
  );
}

export default Seconds;