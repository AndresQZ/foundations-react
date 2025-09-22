
//import {  NestedComponent } from './Flavors';
import UseEffectComponent from './UseEffectComponent';
import { useEffect,  useReducer,  useState } from 'react';
import BasicComponent from './BasicComponent';
import ComplexComponent from './ComplextComponent';
import NestedComponent from './NestedComponent'
import  {FiniteStateMachine}  from '../FiniteStateMachine/FinisteStateMachine';


const data = {
    books: [
      { title : "The$100StartUp", stock: 1, voted: 2, src: "https://m.media-amazon.com/images/I/81DGMjAzdhL._AC_UF894,1000_QL80_.jpg"},
      { title : "The4HourWorkWeek", stock: 3, voted: 9, src: "https://m.media-amazon.com/images/I/71DPD5QEZCL._AC_UF1000,1000_QL80_.jpg"},
      { title : "EffectivePeople", stock: 4, voted: 5, src: "https://m.media-amazon.com/images/I/71oei0tAnzL._AC_UF894,1000_QL80_.jpg"},
      { title : "GoNaturalEnglish", stock: 6, voted: 2, src: "https://m.media-amazon.com/images/I/61sYY30ttsL._AC_UF1000,1000_QL80_.jpg"}
    ]
}

const Foundations = () => {
    const [dataProp, setDataProp] = useState(data)
    const [displayedComponent, setDisplayedComponent] = useState(0)

    const components = new Map(
      [
        [1, <BasicComponent />],
        [2, <ComplexComponent complexProp={dataProp} simpleProp={"HowToGetTheMostOutOfThis"} inlineProp={{phrasalVerb: "step out of", count: 1}}/>],
        [3, <NestedComponent biggerVal="3"/>],
        [4, <UseEffectComponent />],
        [5, <FiniteStateMachine />]
      ]
    )

    
    const handlerSortAsc = (book, book1) => {
        return book.stock - book1.stock
      }
      
      const handlerSortDesc = (book, book1) => {
        return  book1.stock - book.stock
      }
    
    const handler = (option) => {
        let sorted = null
        if (option == 1)  sorted =  data.books.sort(handlerSortAsc)
    
        else sorted =  data.books.sort(handlerSortDesc)
        setDataProp({
         ...data,
         books: sorted 
        })
      }

      
        const options = 
         <>
           <button onClick={() => setDisplayedComponent(1)}>BasicComponent</button>
           <button onClick={() => setDisplayedComponent(2)}>ComplexComponent</button>
           <button onClick={() => setDisplayedComponent(3)}>NestedComponent</button>
           <button onClick={() => setDisplayedComponent(4)}>useEffect</button>
           <button onClick={() => setDisplayedComponent(5)}>FinisteStateMachine</button>
        </>
  

    return (
      <>
        <section>
          react components flavors
          <div>
            {options}
            {components.get(displayedComponent)}

          </div>
        </section>
      </>
    )

    

    // return (

  
    //     <>
    //         <div style={{ display: "flex"}}>
    //         <button onClick={() => { handler(1)}}> Most stock</button>
    //         <button onClick={() => {handler(2) }}> Lest stock</button>
    //         </div>
    //         <BasicComponent/>
    //         <UseEffectComponent/>
    //         <NestedComponent biggerVal="3"/>
    //         <ComplexComponent complexProp={dataProp} simpleProp={"HowToGetTheMostOutOfThis"} inlineProp={{phrasalVerb: "step out of", count: 1}}/>
    //     </>
    // )
}

export default Foundations

