import { useState } from "react";

const stages = new Map(
    [
      [ "start", "⏱️​" ],
      [ "move", "​🛴​​​" ],
      [ "turn", "​​​↔️​​​​" ],
      [ "stop", "​​​​​​🌏​​​​​​" ]
    ]
)

const finitStateMachine = new Map(
  [
    [ "start", {allowed: ["move", "stop"]} ],
    [ "move", {allowed: ["turn", "stop"]} ],
    [ "turn", {allowed: ["move", "stop"]} ],
    [ "stop", {allowed: []} ]
  ]
)


export  const FiniteStateMachine  = () => {
    const [stage, setStage] = useState(stages.get("start") ?? '');
    const [currentStage, setCurrentStage] = useState("start");
    const stageHandler = (source, target) =>{
      const isAllowed = finitStateMachine.get(source)?.allowed.includes(target)
      if (isAllowed) {
         setStage(stages.get(target) ?? '')
         setCurrentStage(target);
    
      } else {
        alert("Invalid transition");
      }
    }  
     
    return (
        <div>
            <h1>Finite State Machine</h1>
            <p>This is the Finite State Machine page.</p>
            <code>{stage}</code>
            <br/>
            <button onClick={() =>stageHandler(currentStage, "start")}> start </button>
             <button onClick={() =>stageHandler(currentStage,"move")}> move </button>
             <button onClick={() =>stageHandler(currentStage,"turn")}> turn </button>
             <button onClick={() =>stageHandler(currentStage,"stop")}> stop </button>

        </div>
    );
};

