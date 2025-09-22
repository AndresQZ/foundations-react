import logo from './logo.svg';
import './App.css';
import SimpleReactComponent  from './Aws_core';
//import { BasicComponent, ComplexComponent, NestedComponent } from './Flavors/Flavors';
import { ShareData} from "./LifingStateUp/ShareData";
import { useEffect,  useReducer,  useState } from 'react';
import { GetHappy } from './Reducer/GetHappy';
import { Main} from './Context/MainContext'
import { ContextReducer } from './ContextReducer/ContextReducer';
import {ColumnLayout} from './ColumnLayout/ColumnLayout'
import Foundations from './GettingStarted/Foundations'
import { Signals } from './signals/Signal';
import CommitHistory from './githubCommitHistory/CommitHistory'
import  WrapGithub from './githubCommitHistory/wrapGithubCommit';
import HarryPotterWorld from './all/HarryPotterWorld'


const reducerHandler = (state, attribute, payload) => {
  let resetedState = {}
  for(const attribute in state) {
    resetedState[attribute] = false 
  }

  return {
    ...resetedState,
    [attribute]: payload
  }
}

const typeMap = new Map(
  [
    ["interview", "isInterview"],
    ["foundations" , "isFoundations" ],
    ["state" , "isLearningState" ],
    ["reducer" , "isReducer" ],
    ["contextReducer" , "isContextReducer" ],
    ["context" , "isContext" ],
    ["signals" , "isSignals" ]
  ]
)

const enhanceReducer = (state, action) => {
  const attribute = typeMap.get(action.type)
  return reducerHandler(state, attribute, action?.payload)
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'interview':
      return {
        ...state,
        isInterview: action.payload
      }
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
    case 'signals':
          return {
              ...state,
              isSignals: action.payload
    }
  }

}

const initData  = {
  isInterview: false,
  isShowFoundations: false,
  isLearningState: false,
  isReducer: false,
  isContext: false,
  isContextReducer: false,
  isSignals: false
}



function App() {
  const [state, dispatch] = useReducer(enhanceReducer,initData)
  //const [state, dispatch] = useReducer(reducer,initData)
  console.log(`render App`)

  const reactComponents = new Map(
    [
      ['foundations', <Foundations />],
      ['interview', <HarryPotterWorld />],
      ['state', <ShareData />],
      ['reducer', <GetHappy />],
      ['context', <Main />],
      ['contextReducer', <ContextReducer />],
      ['signals', <Signals />]
    ]
  )

  const selectedComponent = {
    backgroundColor: '#ea8b4cff',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer'
  }


  return (
    <div className="App" >

      <div>
        <button style={state.isFoundations ? selectedComponent: null} onClick={()=> dispatch({type: 'foundations', payload: !state.isFoundations })}> {state.isFoundations ? `Hide foundations feature` : `Show foundations feature`} </button>
        <button style={state.isInterview ? selectedComponent: null}  onClick={()=> dispatch({type: 'interview', payload: !state.isInterview})}> {state.isInterview ? `Hide State feature`: `Show Interview feature`}</button>
        <button style={state.isLearningState ? selectedComponent: null}  onClick={()=> dispatch({type: 'state', payload: !state.isLearningState } )}> {state.isLearningState ? `Hide State feature` : `Show State feature`} </button>
        <button style={state.isReducer ? selectedComponent: null}  onClick={()=> dispatch({type: 'reducer', payload: !state.isReducer })}> {state.isReducer ? `Hide Reducer feature` : `Show Reducer feature`} </button>
        <button style={state.isContext ? selectedComponent: null}  onClick={()=> dispatch({type: 'context', payload: !state.isContext })}> {state.isContext ? `Hide Context feature` : `Show Context feature`} </button>
        <button style={state.isContextReducer ? selectedComponent: null}  onClick={()=> dispatch({type: 'contextReducer', payload: !state.isContextReducer })}> {state.isContextReducer ? `Hide ContextReducer feature` : `Show ContextReducer feature`} </button>
        <button style={state.isSignals ? selectedComponent: null} onClick={()=> dispatch({type: 'signals', payload: !state.isSignals })}> {state.isSignals ? `Hide Signals feature` : `Show Signals feature`} </button>
      </div>

    
      

      {state.isInterview ? <HarryPotterWorld/> : null}
      {state.isFoundations ?  <Foundations/>  : null}
      {state.isLearningState ?   <ShareData/> : null}
      {state.isReducer ? <GetHappy/> : null}
      {state.isContext  ? <Main /> : null} 
      {state.isContextReducer ? <ContextReducer /> : null}
      {state.isSignals ? <Signals /> : null}

     
  
      {/* <ColumnLayout /> */}

    
     
    </div>
  );
}

export default App;
