const ExtenalComponent = (props) => {
  const {simpleProp} = props
    return <div>
      <h3> External Component </h3>
      <p>Simple prop: {simpleProp}</p>

    </div>
}

const ComplexComponent = (props) => {
    const { simpleProp,  complexProp, inlineProp } = props;
    const ExternalComponent =  <ExtenalComponent simpleProp={simpleProp}/>;

     const lineStyle = {
      borderTop: '1px solid #ccc',
      margin: '10px 0',
      };



    const InnerComponent = <div> 
            <h3> Inner Component assigned to a variable </h3>
            <p>
          This is a inlineProp:  {inlineProp.phrasalVerb}
        </p>
        </div>


     //Do not forget to call the function to render it
    const InnerFunctionalComponent = () => {
      return <div>
         <h3> Inner Functional Component </h3>
      </div>
    }


    const onDetailHandler = () => {}

    return <>
      <h1> Complex Component </h1>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          {ExternalComponent}
          {InnerComponent}
          {InnerFunctionalComponent()}
      </div>
    


      <ul style={lineStyle}>
        {
          complexProp.books.map((book, index) => {
              return <div style={{display: "flex", justifyContent: "center"}} onClick={onDetailHandler} key={index}>
                  <li key={book.title}> {book.title} -  {book.voted} <img style={{maxWidth: "100px"}} src={book.src}/></li>
              </div>   
          })
        }
        </ul>   
    </>
}

export default ComplexComponent;