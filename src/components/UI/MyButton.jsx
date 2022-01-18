import React from "react";
import classes from "./MyButton.module.css"


const MyButton = function ({children, click}) {
    return (
        <button onClick={click} className={classes.myButton}>
            {children}
        </button>
    )
}

export default MyButton;