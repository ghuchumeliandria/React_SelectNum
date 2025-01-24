import React from "react";
import "../../App.css"
import payment from "../../assets/images/payment.png";
function ScndContent(props){
    return(
        <>
            <div className="main_container">
        <div className="container_second_box">
          <div className="scnd_con_img">
            <img src={payment} alt="" />
          </div>
          <div className="select_text">
            <p>You selected {props.text} out of 5</p>
          </div>
          <div className="container_text">
            <h1>Thank you!</h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
        </div>
        </>
    )
}
export default ScndContent;