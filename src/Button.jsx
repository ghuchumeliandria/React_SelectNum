import React from "react";
import "./App.css";
function Button(props) {
console.log(props.value)
  return (
    <>
      <div className="button_container">{props.value.map((btn,key) => {
       return <button key={key}  id={btn.id}>{btn.value}</button>
      })}</div>
    </>
  );
}

export default Button;
