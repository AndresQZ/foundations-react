import { useMemo, useState, memo } from "react"
import { Wrap } from "./FlavorChldren/FlavorChild"
import { DetailBook } from "./detailBook/DetailBook.js"


export function BasicComponent() {
    let count = 0

    const handlerCount = () => {
         count+=1 
        }
    console.log(`render -> BasicComponent `)
    return <div style={{background: "#e6f7ff"}} onClick={handlerCount}>
        BasicComponent - { count}
    </div>

}

const calcCachedValue = (biggerVal) => {
  console.log(`calcCachedValue , biggerVal : ${biggerVal}`)
  return biggerVal * 10
}

export const NestedComponent = memo(({biggerVal})  => {
    console.log(`render -> NestedComponent `)
    const cachedValue = useMemo(()=> calcCachedValue(biggerVal), [biggerVal])
    console.log(`cachedValue: ${cachedValue}`)

    return (
     <>
        <span> NestedComponent </span> 
         <Wrap>
            This should be place into the Wrap component
         </Wrap>
     </>
    )
})



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
      <p> {simpleProp}</p>

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
        {inlineProp.phrasalVerb}
      </p>
    </div>
}


