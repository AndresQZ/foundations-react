import { useRef, useState , useEffect} from "react"
import CommitHistory from "./CommitHistory"
const WrapGithub = () => {
    const [counter, setCounter] = useState(0)
    const value = useRef(0)

    useEffect(() => {
        value.current += 1

    })

    const onClickHandler = (event) => {
        setCounter((counter) => counter +1 )
      
    }


    return(
        <>
        <button onClick={onClickHandler}> Click me</button>
        <p>Times pressed : { counter} </p>

        <p> Renders : {value?.current} </p>

        <CommitHistory maxElementToDisplay={30}></CommitHistory>
        </>
    )
}

export default WrapGithub