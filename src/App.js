import './App.css';
import { Navbar } from './navbar';
import { StepOne } from './step1';
import { StepTwo } from './step2';
import {StepThree} from "./step3";
import { StepFour } from './step4';
import { Summary } from './summary';
import { useState } from "react";

function App() {
  const [showstep1, setshowstep1] = useState(true);
  // const onSubmit = (data) => {
  //   console.log(data);
  //  setshowstep1(false)
  // 
  // };

  console.log(showstep1)

  return (
     <div className="App">
      <Navbar/>
    {showstep1? <StepOne showstep1={showstep1} setshowstep1={setshowstep1}/> : null}
    { <StepTwo setshowstep1={setshowstep1}/>}
   {<StepThree/>}
   { <StepFour />}
    <Summary/>
    </div>
  );
}

export default App;
