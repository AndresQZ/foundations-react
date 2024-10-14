import { useReducer, useState, version } from 'react';
import {reducer} from './reducer';


const source = [
      { title : "The$100StartUp", stock: 1, pages: 100, src: "https://m.media-amazon.com/images/I/81DGMjAzdhL._AC_UF894,1000_QL80_.jpg", rate : null},
      { title : "The4HourWorkWeek", stock: 3, pages: 60, src: "https://m.media-amazon.com/images/I/71DPD5QEZCL._AC_UF1000,1000_QL80_.jpg", rate : null},
      { title : "EffectivePeople", stock: 4, pages: 100 , src: "https://m.media-amazon.com/images/I/71oei0tAnzL._AC_UF894,1000_QL80_.jpg", rate : null},
      { title : "GoNaturalEnglish", stock: 6, pages: 50, src: "https://m.media-amazon.com/images/I/61sYY30ttsL._AC_UF1000,1000_QL80_.jpg", rate : null},
      { title : "TheJapaneseSecretToALongAndHappyLife", stock: 6, pages: 90, src: "https://m.media-amazon.com/images/I/61sYY30ttsL._AC_UF1000,1000_QL80_.jpg", rate : null},
      { title : "Power", stock: 6, pages: 70, src: "https://m.media-amazon.com/images/I/61sYY30ttsL._AC_UF1000,1000_QL80_.jpg", rate : null},
      { title : "TheInsideMan", stock: 3, pages: 50, src: "https://m.media-amazon.com/images/I/61sYY30ttsL._AC_UF1000,1000_QL80_.jpg", rate : null}
]


export const GetHappy = () => {
    const [ books, dispatch] = useReducer(reducer, source);
    const [pages, setPages] = useState(0)
    const [selectedBook, setSelectedBook] = useState(null)
    const [checkedItem, setCheckedItem] = useState(null)
 

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

    const onRateHandler = (event) => {
        setCheckedItem(event.target.value)
        const bookToUpdate =  books.find((book) => book.title === selectedBook )
        const payload = { ...bookToUpdate, rate: event.target.value}
       // dispatch({type: "rate", payload: payload})

       const text = `Neat own nor she said see walk. And charm add green you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant. Improving age our her cordially intention. His devonshire sufficient precaution say preference middletons insipidity. Since might water hence the her worse. Concluded it offending dejection do earnestly as me direction. Nature played thirty all him.
       Far quitting dwelling graceful the likewise received building. An fact so to that show am shed sold cold. Unaffected remarkably get yet introduced excellence terminated led. Result either design saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond she.
       Examine she brother prudent add day ham 01-12-2024 12:00:00. Far stairs now coming bed oppose hunted become his. You zealously departure had procuring suspicion. Books whose front would purse if be do decay. Quitting you way formerly disposed perceive ladyship are. Common turned boy direct and yet.`

       const dateRegex = new RegExp(`(\d\-?)+\s(\d:?)+`)
       console.log(dateRegex.exec(text))

       const fiveFirst = books.slice(0, 5)
       console.log(`fiveFirst: ${fiveFirst}`)


        // const international = [true, false]
        // const brands  = ["amex", "carnet"]
        // const paymentMethodTypes = ["debit", "credit"]
        // const customErrors = {
        //     ["debit", "credit"]: {

        //     },
        //     visa: {
        //         debit: "",
        //         credit: "",
        //         brands: ["Mastercard", "Amex"],
        //         international: []

        //     },
        //     amex: paymentMethodTypes,
        //     carnet: paymentMethodTypes
        // }

        // const apiResponse = { type: "credit", id: "Amex"}

        // const { type, id} = apiResponse
        // if (customErrors[id]) {
        //     const allowedTypes = customErrors[id]
        

        // }
    }

    return (
        <>
           <h1>Prague itinerary</h1>
           {  books.map( book => {
            return  <div key={book.title}>
                     <span> {book.title} - {book.src} </span>
                     <button onClick={() => handleArchive(book)}> Archive </button>
                </div>
             
           })
           }

           <select value={selectedBook} onChange={(event) => setSelectedBook(event.target.value)}>
            {books.map((book) => {
                return <option key={`${book.title}`} value={book.title}>{book.title}</option>
            })

            }
           </select>

           <input name="good" type="radio" onChange={(event) => onRateHandler(event)} value="good" checked={"good" === checkedItem }/>
           <label htmlFor="good">Good</label>

           <input name="bad" type="radio" onChange={(event) => onRateHandler(event)} value="bad" checked={"bad" === checkedItem }/>
           <label htmlFor="bad">Bad</label>

           <input name="regular" type="radio" onChange={(event) => onRateHandler(event)} value="regular" checked={"regular" === checkedItem }/>
           <label htmlFor="regular">Regular</label>

           <textarea value={value} onChange={handlerTextArea}/>
           <button onClick={() => handleAdd()}> Add book</button>
        </>
    )
}