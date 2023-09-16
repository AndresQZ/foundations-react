import { useState } from "react"

export const ShareData= () => {
    const [isActive, setActive] = useState(false)

    const handlerIsActive = () => {
        setActive(!isActive)
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          <div style={{border: "1px solid black", padding: "15px"}}>
            <Panel panelId="1"  handleHidden={handlerIsActive} isActive={isActive} color="#99d7dd"> 
                    Message to show off to Panel 1
                    { isActive ? (
                        <div>
                            <span>The more understanding of JS you get, the more weird it becomes </span>
                            <button onClick={() => handlerIsActive()}>  Show Detail </button>
                        </div>
        
               ) : null}
               
            </Panel>
          </div>

          <div style={{border: "1px solid black", padding: "15px"}}>
            <Panel panelId="2" handleHidden={handlerIsActive} isActive={isActive} messageDetail="MessageDetail2" color="#e5dde6"> 
               Message to show off to Panel 2
               { !isActive ? (
                 <div>
                    <span>To get the most out of this project you need to understand React concepts </span>
                    <button onClick={() => handlerIsActive()}>   Show Detail  </button>
                 </div>      

               ) : null}
                
            </Panel>
           </div>
        </div>   
    )
}

const Panel = ({children, handleHidden, panelId, isActive, color}) => {
    return <div style={{background: color}}>
           Panel {panelId}
            {children}
        </div>
}