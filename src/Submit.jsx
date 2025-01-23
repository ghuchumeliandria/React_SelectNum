import React from "react";
import './App.css'

function Submit(props){
    return (
        <>
        <button className="submit_btn" onClick={props.fun}>SUBMIT</button>
        </>
    )
}
export default Submit;