import { useState } from "react";
import "./App.css";
import img from "./assets/images/star.png";
import Submit from "./Submit";
import payment from "./assets/images/payment.png";
import Button from "./Button";

function App() {
  const [number,setNumber] = useState([1, 2, 3, 4, 5])
  const [text, setText] = useState();
  const [isTrue, setIsTrue] = useState(true)

  function SetText(btn){
    setText(btn)
  }
  function SubmitBtn(){
    setIsTrue(!isTrue)
}
  return (
    <>
    {
      !isTrue ? (
        <div className="main_container">
        <div className="container_second_box">
          <div className="scnd_con_img">
            <img src={payment} alt="" />
          </div>
          <div className="select_text">
            <p>You selected {text} out of 5</p>
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
        
      ) : 
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
            <Button  fun={SetText} number={number}/>
            <Submit fun={SubmitBtn}/>
          </div>
        </div>
        </div>
      } 
      
    </>
  );
}

export default App;
