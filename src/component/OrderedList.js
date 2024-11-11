import React from "react"
import { useState, useEffect } from "react"
export const OrderedList = () => {
    const [data, setData] = useState([])
    const [isShowData, setIsShowData] = useState(false)

    useEffect(() =>{
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            const response =  await fetch("https://potterapi-fedeperin.vercel.app/en/characters")
            if(response.ok) {
                setData(await response.json())
            }
            else {
                setData([])
            }
        }
        catch(err) {
         console.error(`something went wrong ${err}`)
        }
    }

    const handlerShow = () => setIsShowData(true)
    const handlerHide = () => setIsShowData(false)

    const handlerDetail = (event)=> {
        console.log(`event : ${event}`)
    }

    return <div>
        <button onClick={handlerShow}>Show results</button>
        <button onClick={handlerHide}>hide results</button>

        {isShowData && <div>
            {
                data.map((element, i) => {
                    return <div key={element?.nickname} onClick={(e) => handlerDetail(i)}>{element?.nickname}</div>
                })
            }
          </div>
        }
    </div>
}
