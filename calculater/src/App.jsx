import Display from "./components/Display";
import Box from "./components/Box.Jsx";
import "./App.css";
import { useState } from "react";

function App(){
  let [currentdisplay,setcurrentdisplay]= useState("")
  let  boxvalue=(button)=>{console.log(button)
    if(button==="c"){
      setcurrentdisplay("");
    }
    else if(button==="="){
     let result=eval(currentdisplay);
     setcurrentdisplay(result)
    }
    else{let newvalue=currentdisplay+button;
      setcurrentdisplay(newvalue)}}
    
  
  return (
    <>
      <div className="container">
        <Display oninput={currentdisplay}></Display>
        <Box diplay={boxvalue}></Box>
      </div>
    </>
  );
};

export default App;
