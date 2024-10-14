
//import {  NestedComponent } from './Flavors';
import UseEffectComponent from './UseEffectComponent';
import { useEffect,  useReducer,  useState } from 'react';
import BasicComponent from './BasicComponent';
import ComplexComponent from './ComplextComponent';
import NestedComponent from './NestedComponent'


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
           <button onClick={() => setDisplayedComponent(2)}>NestedComponent</button>
           <button onClick={() => setDisplayedComponent(3)}>useEffect</button>
           <button onClick={() => setDisplayedComponent(4)}>ComplexComponent</button>
        </>
      

    let visualComponent = null;
    
    switch (displayedComponent) {
      case 1:
        visualComponent =  <BasicComponent/>
        break;
      case 2: 
      visualComponent =  <NestedComponent biggerVal="3"/>
      break;
      case 4: 
      visualComponent =  <ComplexComponent complexProp={dataProp} simpleProp={"HowToGetTheMostOutOfThis"} inlineProp={{phrasalVerb: "step out of", count: 1}}/>
      break;
      case 3: 
      visualComponent = <UseEffectComponent/>
      break;
    }

    return (
      <>
        {options}
        {visualComponent}

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

