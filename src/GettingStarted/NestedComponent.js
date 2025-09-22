import { Wrap } from "../FlavorChldren/FlavorChild.js"
import { useMemo, memo, useState } from "react"


const calcCachedValue = (biggerVal) => {
    console.log(`calcCachedValue , biggerVal : ${biggerVal}`)
    return biggerVal * 10
}


const TaskListComponent = ({taskList}) => {
  return <>  
    {taskList.map((task,index) => {
     return <p key={index}> {task}</p>
    })}
  </>

}

const  NestedComponent = ({biggerVal}) => {
      const cachedValue = useMemo(()=> calcCachedValue(biggerVal), [biggerVal])
      console.log(`cachedValue: ${cachedValue}`)
      const [task, setTask ] = useState("");
      const [taskList, setTaskList] = useState([]);

      const inlineStyle = {
        display: "flex", 
        flexDirection: "row",
        justifyContent: "center",
        
      }



      const BuldingBlock = <div style={{borderRadius: "10px", border: "2px solid #eaede6ff", width: "fit-content", backgroundColor: "#e4bbafff", padding: "10px"}}
          draggable="true"
          onDragStart={(event) => event.dataTransfer.setData("text/plain", "building block")}
        >
          Building block
      </div>

      const Conector = () => {
        return <div draggable="true"  onDragStart={(event) => event.dataTransfer.setData("text/plain", "conector")}
             style={{borderRadius: "10px", border: "2px solid #eaede6ff", width: "fit-content", backgroundColor: "#ceb2dcff", padding: "10px"}}>
          Conector
        </div>
      }

      const BuildingBlockSection = () => {
        return <div >
          <h3>Building Block Section</h3>
            <div style={inlineStyle}>

             {BuldingBlock}
             {Conector()}

            </div>

        </div>
      }

      const taskHandler = (event) => {
          setTask(event.target.value)
      }

      const onHandlerTask = () => {
        const copyList = [...taskList]
        copyList.push(task)
        setTaskList(copyList)
        setTask("")

      }

      const [location, setLocation] =  useState(null)
      const [salary, setSalary] =  useState(null)
      const [filteredLocations, setFilteredLocations]  = useState([])

      return (
       <>
          <p> NestedComponent </p> 
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

            <div>

              <ul>
                {filteredLocations.map(item => {
                return <li key={`${item.location}${item.currency}`}> {item.location} - {item.squareFeet}</li>
                })}
              </ul>

              <textarea name="textarea" rows="10" cols="50" onChange={taskHandler} placeholder="tap to write down your task"
              value={task}>

              </textarea>
              <button onClick={onHandlerTask}>Add task</button>
            </div>
 
            {BuildingBlockSection()}

          </div>
         
          <Wrap>
              <TaskListComponent taskList={taskList}/>
          </Wrap>
       </>
      )
  }



  export default memo(NestedComponent)