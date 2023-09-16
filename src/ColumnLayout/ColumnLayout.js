import './styles.css'

import { createContext, useReducer, useState } from 'react'

const contextLayout = createContext()


const basicReducer = (state, action) => {
  console.log(`action: ${action}`)
  switch (action.type) {
    case 'delete':
      return [
         ...state.filter(id => id != action.payload)
      ]
    
     default:
      return [
        ...state
      ]
      
  }
}
const initIdsDiv = [1,2,3,5,6,7,8]

export const ColumnLayout = () => {
  const [state, dispatch] = useReducer(basicReducer,initIdsDiv )



    const handleClick = (selectedId) => {
      dispatch({type: 'delete', payload: selectedId })
    }
    return <div>

      <div className='flexContainer'>

      <div className="flexItem">
        <p> DIV 1</p>

       </div>

       <div>

          <p> DIV 2</p>
        
        </div>

        <div style={{ flex: "1 1 200px", border: "solid black 1px"}}>

          <p> DIV 3</p>
        
        </div>

        <div style={{ flex: "1 1 200px", border: "solid brown 1px"}}>

         <p> DIV 4</p>

        </div>

        <div style={{ flex: "1 1 200px", border: "solid pink 1px"}}>

         <p> DIV 5</p>

        </div>

        <div style={{ flex: "1 1 200px", border: "solid yellow 1px"}}>

         <p> DIV 6</p>

        </div>

      </div>
       
  


        <div style={{display: "grid", gridTemplateColumns:"200px 200px 200px 200px" , gridGap: "10px" , 
         gridTemplateRows:"auto"}}>
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
          <div>Six</div>
          <div>Seven</div>
          <div>Eight</div>
        </div>


      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {
          state.map(id => {
            return ( <div key={id} className="flexItem" style={{ border: "1px red dotted", padding:"5px 10px"}} onClick={()=> handleClick (id)}>
               DIV {id}
             </div>)
          })
        }
      </div>


    </div>
}