import logo from './logo.svg';
import './App.css';
import AwsCore  from './Aws_core';
import { BasicComponent, ComplexComponent, NestedComponent } from './Flavors';
import { ShareData} from "./LifingStateUp/ShareData";
import { useEffect,  useReducer,  useState } from 'react';
import { GetHappy } from './Reducer/GetHappy';
import { Main} from './Context/MainContext'
import { ContextReducer } from './ContextReducer/ContextReducer';
import {ColumnLayout} from './ColumnLayout/ColumnLayout'


const data = {
  books: [
    { title : "The$100StartUp", stock: 1, voted: 2, src: "https://m.media-amazon.com/images/I/81DGMjAzdhL._AC_UF894,1000_QL80_.jpg"},
    { title : "The4HourWorkWeek", stock: 3, voted: 9, src: "https://m.media-amazon.com/images/I/71DPD5QEZCL._AC_UF1000,1000_QL80_.jpg"},
    { title : "EffectivePeople", stock: 4, voted: 5, src: "https://m.media-amazon.com/images/I/71oei0tAnzL._AC_UF894,1000_QL80_.jpg"},
    { title : "GoNaturalEnglish", stock: 6, voted: 2, src: "https://m.media-amazon.com/images/I/61sYY30ttsL._AC_UF1000,1000_QL80_.jpg"}
  ]
}

const handlerSortAsc = (book, book1) => {
  return book.stock - book1.stock
}

const handlerSortDesc = (book, book1) => {
  return  book1.stock - book.stock
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'flavors':
      return {
        ...state,
        isShowFlavors: action.payload
      }
    case 'state':
      return {
        ...state,
        isLearningState: action.payload
      }
    case 'reducer':
        return {
          ...state,
          isReducer: action.payload
        }
    case 'contextReducer':
        return {
            ...state,
            isContextReducer: action.payload
        }
    case 'context':
          return {
              ...state,
              isContext: action.payload
    }
  }

}

const initData  = {
  isShowFlavors: false,
  isLearningState: false,
  isReducer: false,
  isContext: false,
  isContextReducer: false,
}



function App() {

  const [state, dispatch] = useReducer(reducer,initData)
  const [dataProp, setDataProp] = useState(data)



  const handler = (option) => {
    let sorted = null
    if (option == 1)  sorted =  data.books.sort(handlerSortAsc)

    else sorted =  data.books.sort(handlerSortDesc)
    setDataProp({
     ...data,
     books: sorted 
    })
  }


  return (
    <div className="App" >

      <div>
        <button onClick={()=> dispatch({type: 'flavors', payload: !state.isShowFlavors })}> {state.isShowFlavors ? `Hide Flavors feature` : `Show Flavors feature`} </button>
        <button onClick={()=> dispatch({type: 'state', payload: !state.isLearningState } )}> {state.isLearningState ? `Hide State feature` : `Show State feature`} </button>
        <button onClick={()=> dispatch({type: 'reducer', payload: !state.isReducer })}> {state.isReducer ? `Hide Reducer feature` : `Show Reducer feature`} </button>
        <button onClick={()=> dispatch({type: 'context', payload: !state.isContext })}> {state.isContext ? `Hide Context feature` : `Show Context feature`} </button>
        <button onClick={()=> dispatch({type: 'contextReducer', payload: !state.isContextReducer })}> {state.isContextReducer ? `Hide ContextReducer feature` : `Show ContextReducer feature`} </button>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
    
      

      <AwsCore></AwsCore>
      {
        state.isShowFlavors ? 
        <>
             <div>
                <button onClick={() => { handler(1)}}> Most stock</button>
                <button onClick={() => {handler(2) }}> Lest stock</button>
            </div>
           <BasicComponent/>
           <NestedComponent biggerVal="3"/>
          <ComplexComponent complexProp={dataProp} simpleProp={"HowToGetTheMostOutOfThis"} inlineProp={{phrasalVerb: "step out of", count: 1}}/>
        </>
 
         : null
      }
 

      {state.isLearningState ?   <ShareData/> : null}
      {state.isReducer ? <GetHappy/> : null}
      {state.isContext  ? <Main /> : null} 
      {state.isContextReducer ? <ContextReducer /> : null}

      <ColumnLayout />
     
    </div>
  );
}

export default App;
