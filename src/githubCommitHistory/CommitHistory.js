import  { useEffect, useMemo, useState, memo } from "react"

function getJanuaryDays2024() {
  // Create a new Date object for January 1st, 2024
  const startDate = new Date(2024, 0, 1);  // Year, Month (0-indexed), Day

  // Get the number of days in January 2024
  const numberOfDays = new Date(startDate.getFullYear(), 1, 0).getDate(); // Year, Month (1 for February), Day (set to 0 to get previous month's last day)

  // Create an empty array to store the dates
  const dates = [];

  // Loop through each day in January and add it to the array
  for (let i = 0; i < numberOfDays; i++) {
    // Create a new Date object for each day
    const date = new Date(startDate.getTime());
    date.setDate(date.getDate() + i);  // Add i days to the starting date

    // Push the formatted date (optional) or just the Date object
    dates.push(date.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' }));  // Format (e.g., 01/01/2024)
    // Alternatively, push the Date object directly: dates.push(date);
  }

  return dates;
}


const mockCommits = [
  {commits : 10, project: "small/01", date: "01/01/2024"},
  {commits : 9, project: "small/20", date: "02/01/2024"},
  {commits : 2, project: "small/1", date: "09/01/2024"},
  {commits : 1, project: "small-01", date: "10/01/2024"},
  {commits : 9, project: "small01", date: "15/01/2024"},
  {commits : 5, project: "large/100", date: "17/01/2024"},
  {commits : 5, project: "medium/50", date: "19/01/2024"},
  {commits : 3, project: "large,/300", date: "20/01/2024"},
  {commits : 7, project: "medium", date: "25/01/2024"},
  {commits : 10, project: "medium/100", date: "26/01/2024"} ,
]

const expensiveFunction  = () => {
  const backgroundColor = [`green`, `orange`, `pink`]
 return backgroundColor[Math.floor(Math.random() * backgroundColor.length -1)]
}



const CommitHistory = (props) => {
  console.log(`render CommitHistory`)
  const {maxElementToDisplay =5, defaultColor=`yellow`} = props
  const [commits, setCommits] =  useState([])
  const [search, setSearch] =  useState([])
  const [filteredItems, setFilteredItems] =  useState([])
  const background = expensiveFunction()
  const computedBackgroundColor = useMemo(expensiveFunction, [maxElementToDisplay]);
    useEffect(() => {

        const wrapAsyncFc =  async () => {

          const commitsResponse = await new Promise((resolve, rej) => {
                setTimeout(() => resolve(mockCommits), 2000)
         })

         const proceededData =fillMissingDates(commitsResponse)
         const commitsHistory = proceededData.slice(0, maxElementToDisplay)
         setCommits(commitsHistory)

        }
        wrapAsyncFc()
        
    })

    const filterResult = (target) => {
      const regex = /([a-z]+)\/([0-9]+)/
       let results = []

     const regexToMatch = new RegExp(`(${target.value}/[\\d]+)`)
  
      for(const item of commits) {
       const matchedElement = item.project.match(regexToMatch)
       console.log(`matchedElement: ${JSON.stringify(matchedElement)}`)
       if (matchedElement) {
        results.push(item)
       }
      }

      console.log(`results : ${results}`)

      setFilteredItems(results)
      setSearch(target.value)
      
    }
    

    const fillMissingDates = (commits) => {
      const emptyCommit = { commits : 0, project: "small", date:  `2024-01`}

      const januaryDays = getJanuaryDays2024();
      //(e.g., 01/01/2024)

      const filledCommits = januaryDays.map((day, index) => {
        const dayWithCommits = commits.find((commitData) => commitData.date == day)
        if (dayWithCommits) {
          return dayWithCommits
        } else {
          return {...emptyCommit, date: day}
        }
      })
     return filledCommits
    }

    const colorsMap =  new Map([
      [0, "brown"],
      [5, "red"],
      [10, "blue"],
      [11, "green"],
    ])

    return (

       <>
          <input type="text" name="search" value={search} onChange={(e) => filterResult(e.target)}/>
  

          <div style={{display: "flex", flexDirection: "row" , flexWrap: "wrap"}}>

          { commits.map((data) => {
            return <div key={data.date} style={{color:  colorsMap.get(data.commit), border: "1px solid black"}}>  {data.date}</div>
          })
          }

        </div>

        <div style={{ backgroundColor: computedBackgroundColor}}>
          <h1>Result: </h1>
          {filteredItems.map((item) => {
            return <p key={`${item.project}${item.date}`}> Project: {item.project} -  Commits {item.commits}</p>
          })}
        </div>
       
       </>
  

    )

}
export default memo(CommitHistory);