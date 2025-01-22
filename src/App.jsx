import { useState } from "react";
import Button from "./Button";
import "./App.css";
import img from "./assets/images/star.png";
import Submit from "./Submit";

function App() {
  const [button, setButton] = useState([{value : 1, id : 1},{value : 2, id : 2},{value : 3, id : 3},{value : 4, id : 4},{value : 5, id : 5},]);


  return (
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
        <Button value={button}/>
        <Submit />
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
