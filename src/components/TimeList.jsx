import React from "react";

const TimeList = function({fix, ind}) {

    return(
        <div className="timeList">
           <strong>{ind+1}. </strong>
           <span>{fix.hou}:{fix.min}:{fix.sec}:{fix.msec}</span>
            
        </div>
    )
}

export default TimeList;