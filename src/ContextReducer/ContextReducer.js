import { createContext, useContext, useReducer } from "react";
import { useRef } from 'react';


const dataApp = {
   characters: [ {name : 'Goku', power: 85, image: ''} ,
   {name : 'Vegeta', power: 89, image: ''} ,
   {name : 'Bills', power: 95, image: ''},
   {name : 'Broly', power: 94, image: ''}
],
textValue: ''   
}

const reducer = (state, action) => {
  console.log(`action: ${action.payload}`)
    if ( action.type === 'delete') {
        return  {
            ...state,
            characters: state.characters.filter(chr => chr.name !== action.payload.name)
            
        }
    }
    if (action.type === 'text') {
      return {
        ...state,
        textValue: action.payload
      }
    }

}

const ContextApp  = createContext()


export const ContextReducer = () => {
 const [state, dispatch] = useReducer(reducer, dataApp);

const values = {
  state,
  dispatch
};



    return <>
      <ContextApp.Provider value={values}
      > 
        <ContextReducerChild />
        <p>Context With Reducer</p>
      </ContextApp.Provider>
     
    
    </>
}


const ContextReducerChild = () => {

  return <>
       <DeeperComponent />
   </>

}


const DeeperComponent = () => {
  const inputRef = useRef(null);
    const { state, dispatch } = useContext(ContextApp);

    let pattern = /password/ig
    let result = state.textValue.match(pattern);
    console.log(`result :: ${result}`)
    console.log(`has z :: ${pattern.test(state.textValue) ? 'true' : 'false'}`)

   

    function handleClick() {
      inputRef.current.focus();
    }

    const handlerClick = (char) => {
       dispatch({type: 'delete', payload: char})
    }

    const handlerOnChange = (e) => {
      dispatch({type: 'text', payload: e.target.value})
   }

    return  <>

       <p> A Deeper Component </p>
       <p> this Component uses context data </p>
       {
        state.characters.map( char => {
           return   <section key={char.name}>
             <span> { char.name} -  {char.power} </span>
             <button onClick={() => handlerClick(char)}> Delete Char</button>
           </section>
        })

       }

       <input value={state.textValue} onChange={(e) => handlerOnChange(e)}/>
        <button onClick={handleClick}>
          Focus the input
        </button>
    </>
}
