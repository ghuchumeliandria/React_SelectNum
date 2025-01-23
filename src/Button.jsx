import React from "react";
import './App.css'

function Button(props){
    return (
        <>
        <div className="button_container">
              {props.number.map((btn, key) => {
                return (
                  <button key={key} onClick={() =>props.fun(btn)}>
                    {btn}
                  </button>
                );
              })}
            </div>
        </>
    )
}
export default Button;