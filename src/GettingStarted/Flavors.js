import { useMemo, useState, memo, useEffect } from "react"
import { Wrap } from "../FlavorChldren/FlavorChild.js"
import { DetailBook } from "../detailBook/DetailBook.js"


export function BasicComponent() {
    //allows us to track state in a function component.
    const [counterRenders, setCounterRenders] =  useState(0)
    const [location, setLocation] =  useState(null)
    const [bedrooms, setBedrooms] =  useState(0)

    const realEstate = [
      {location: "CDMX", currency: "MXN", squareFeet:70 },
      {location: "PV", currency: "MXN", squareFeet:100 },
      {location: "NY", currency: "US", squareFeet:60 },
      {location: "BT", currency: "US", squareFeet:60 },
      {location: "MA", currency: "US", squareFeet:65 },
      {location: "TX", currency: "US", squareFeet:130 },
      {location: "MTY", currency: "MXN", squareFeet:100 },
    ]

    const realStateDetails = [
      { bedrooms: 2, location: "CDMX", available: false},
      { bedrooms: 1, location: "BT", available: false},
      { bedrooms: 3, location: "TX", available: false},
      { bedrooms: 2, location: "PV", available: true},
      { bedrooms: 1, location: "MA", available: false},
      { bedrooms: 2, location: "MTY", available: true},
      { bedrooms: 1, location: "NY", available: true},
    ]

    const composeData = realEstate.map(element => {
      return realStateDetails.find(item => item.location === element.location)
    })


  
    console.log(`render BasicComponent`)

    const onLocationHandler = (event) => {
      setLocation(event.target.value)  
    }

    const onBedroomHandler = (event) => {
       setBedrooms(event.target.value)
    }

    return <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <div>

      <select onChange={(event) => onLocationHandler(event)} value={location}>
        <option value="NY">square</option>
        <option value="CDMX">circle</option>
        <option value="TX">triangle</option>
      </select>
      <p>selected Location : {location}</p>

      </div>
      <div>

        <select onChange={(e) => onBedroomHandler(e)}>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <p>selected bedrooms : {bedrooms}</p>
      </div>

    </div>

}





export const ComplexComponent = (props) => {
    const [isShowDetail, setShowDetail] =  useState(false)
    console.log(`render -> ComplexComponent ,  isShowDetail : ${isShowDetail}`)
    const { simpleProp,  complexProp, inlineProp } = props;

    const handlerIsDetail = ()  => {
       setShowDetail(!isShowDetail)
    }

    return <div style={{background: "#f9f2ec"}}>
      ComplexComponent
      <span> Books </span>
      <p> This is a simpleProp: {simpleProp}</p>

      { isShowDetail ? (
        <>
            <DetailBook/>
            <button onClick={handlerIsDetail}> Go Back </button>
        </>

      ) : (
       
        
        <ul>
        {
          complexProp.books.map((book, index) => {
              return <div style={{display: "flex", justifyContent: "center"}} onClick={handlerIsDetail} key={index}>
                  <li key={book.title}> {book.title} -  {book.voted} <img style={{maxWidth: "100px"}} src={book.src}/></li>
              </div>   
          })
        }
        </ul>

      )}
      
   
      <p>
       This is a inlineProp:  {inlineProp.phrasalVerb}
      </p>
    </div>
}


