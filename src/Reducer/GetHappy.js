import { useReducer, useState } from 'react';
import {reducer} from './reducer';


const source = [
      { title : "The$100StartUp", stock: 1, voted: 2, src: "https://m.media-amazon.com/images/I/81DGMjAzdhL._AC_UF894,1000_QL80_.jpg"},
      { title : "The4HourWorkWeek", stock: 3, voted: 9, src: "https://m.media-amazon.com/images/I/71DPD5QEZCL._AC_UF1000,1000_QL80_.jpg"},
      { title : "EffectivePeople", stock: 4, voted: 5, src: "https://m.media-amazon.com/images/I/71oei0tAnzL._AC_UF894,1000_QL80_.jpg"},
      { title : "GoNaturalEnglish", stock: 6, voted: 2, src: "https://m.media-amazon.com/images/I/61sYY30ttsL._AC_UF1000,1000_QL80_.jpg"}
]


export const GetHappy = () => {
    const [ books, dispatch] = useReducer(reducer, source);

    const [ value, setValue ] = useState('')

    const handleArchive =  (book) => {
        dispatch({ type: "Remove", book: book})
    }

    const handleAdd =  () => {
        const book = { title: value, stock: 0, src : ""}
        dispatch({ type: "Add", book: book})
    }

    const handlerTextArea =  (e) => {
      setValue(e.target.value)
    }

    return (
        <>
           <h1>Prague itinerary</h1>
           {  books.map( book => {
            
            return   <div key={book.title}>
                     <span> {book.title} - {book.src} </span>
                     <button onClick={() => handleArchive(book)}> Archive </button>
                </div>
             
           })
           }
           <textarea value={value} onChange={handlerTextArea}/>
           <button onClick={() => handleAdd()}> Add book</button>
        </>
       
    )
}