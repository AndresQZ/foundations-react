import { Wrap } from "../FlavorChldren/FlavorChild.js"
import { useMemo, memo, useState } from "react"



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


const calcCachedValue = (biggerVal) => {
    console.log(`calcCachedValue , biggerVal : ${biggerVal}`)
    return biggerVal * 10
  }
  
const  NestedComponent = ({biggerVal}) => {
      console.log(`render -> NestedComponent `)
      const cachedValue = useMemo(()=> calcCachedValue(biggerVal), [biggerVal])
      console.log(`cachedValue: ${cachedValue}`)


      const [location, setLocation] =  useState(null)
      const [salary, setSalary] =  useState(null)
      const [filteredLocations, setFilteredLocations]  = useState([])

  
      const onLocationHandler = (event) => {
          setLocation(event.target.value)
          const matchedElements =  realEstate.filter(element => element.location === event.target.value)
          setFilteredLocations(matchedElements)
      }
  
      const onSalaryHandler = (event) => {
          setSalary(event.target.value)
      }


      return (
       <>
          <p> NestedComponent </p> 
          <div>
            <select onChange={(event) => onLocationHandler(event)} value={location}>
              <option value="CDMX">CDMX</option>
              <option value="NY">NY</option>
              <option value="MTY">MTY</option>
            </select>
            <p>selected Location : {location}</p>
          </div>

          <div>
            <select onChange={(e) => onSalaryHandler(e)}>
                <option value="1500-2000">1500-2000</option>
                <option value="2000-4500">2000-4500</option>
                <option value="5000">5000</option>
            </select>
            <p>selected salary : {salary}</p>
          </div>

          <ul>
            {filteredLocations.map(item => {
            return <li key={`${item.location}${item.currency}`}> {item.location} - {item.squareFeet}</li>
            })}
          </ul>


          
          <Wrap>
              This should be place into the Wrap component
          </Wrap>
       </>
      )
  }



  export default memo(NestedComponent)