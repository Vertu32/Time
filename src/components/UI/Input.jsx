import React from "react";
import classes from "./Input.module.css"

const Input = function({val, fnc, place}) {
    return (
        <input 
        className={classes.myInput} 
        placeholder={place} onChange={fnc}  
        type="number"></input>
    )
}

export default Input;