import React from "react";
import '../../App.css';
import Button from "../button/button";
import img from "../../assets/images/star.png";
import Submit from "../submitBtn/Submit";

function Content(props){
    

    return(
        <>
            <div className="main_container">
        <div className="container_first_box">
          <div className="container_icon">
            <img src={img} alt="star" />
          </div>

          <div className="container_text">
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="main_container_of_btn">
            <Button  fun={props.scndFun} number={props.number}/>
            <Submit fun={props.fun}/>
          </div>
        </div>
        </div>
        </>
    )
}
export default Content;