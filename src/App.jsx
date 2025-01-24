import { useState } from "react";
import "./App.css";
import Content from "./components/FrstContent/content"
import ScndContent from "./components/ScndContent/scndContent";


function App() {
  const [isTrue, setIsTrue] = useState(true)
  const [text, setText] = useState();
  const [number,setNumber] = useState([1, 2, 3, 4, 5])
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
        <ScndContent text={text} />
        
      ) : 
        <Content fun={SubmitBtn} number={number} scndFun={SetText}/>   
      } 
      
    </>
  );
}

export default App;
