import { useState } from "react";





const DetailRequest = () => {
    return <>

    </>
}

const ComplexComponent = (props) => {
    const { simpleProp,  complexProp, inlineProp } = props;
    const [isShowRequest, setShowRequest] = useState(false);

    const detailRequest = isShowRequest ? <DetailRequest/> : null

    const onDetailHandler = () => {

    }

    return <>
      <p> Complex Component </p>

      <ul>
        {
          complexProp.books.map((book, index) => {
              return <div style={{display: "flex", justifyContent: "center"}} onClick={onDetailHandler} key={index}>
                  <li key={book.title}> {book.title} -  {book.voted} <img style={{maxWidth: "100px"}} src={book.src}/></li>
              </div>   
          })
        }
        </ul>


        <p>
          This is a inlineProp:  {inlineProp.phrasalVerb}
        </p>
    
    </>
}

export default ComplexComponent;