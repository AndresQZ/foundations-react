import { useEffect, useState } from "react"

const UseEffectComponent = () => {
    const [data, setData] = useState([])
    const [page, setPage]  =  useState(0)
    const [itemToDisplay, setItemToDisplay]  =  useState([])

    useEffect(() => {

        const helper = async () => {

            try {
              const waitFor = new Promise( (resolve, reject) => {
                setTimeout(() => resolve(), 1000);
              })
            

              await waitFor;
              const response =  await fetch("https://potterapi-fedeperin.vercel.app/en/spells");
              if (response.ok) {
               const result =  await response.json() 
               console.log(`result : ${JSON.stringify(result)}`)
               setData(result)
               setItemToDisplay(result.slice(page, 10))

              }
              else {
                const resultNonOk = await response.text()
                console.warn(`resultNonOk : ${resultNonOk}`)
                setData([])
              }
    
            } catch(error) {
              console.error(`error : ${error}`)
            }
          }

          helper()
    },[])

    const handleNextPage = (page) => {
      const temp = data.slice(page, page+10)
     setItemToDisplay(data.slice(page, page+10))
    }

    const handlePreviousPage = (page) => {
      setItemToDisplay(data.slice(page, page-10))
     }



    return (
        <>
          <p> {itemToDisplay.length}</p>
         {itemToDisplay.length > 0 ? 
             <>
              <button onClick={() => handleNextPage(page +10)}>Next Page</button>
               <button onClick={() => handlePreviousPage(page)}>Previous Page</button>

              {itemToDisplay.map((component, index) => {
                return  <p key={component.index}> {component.spell} - {component.use}</p>
              })}
              
            </>
    
           : <p> Getting Data, please wait a little bit</p>
         }
        

        </>
    )
}

export default UseEffectComponent;