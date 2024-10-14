import { useState } from "react";

const BasicComponent = () => {
    const [location, setLocation] =  useState(null)
    const [salary, setSalary] =  useState(null)

    const onLocationHandler = (event) => {
        setLocation(event.target.value)
    }

    const onSalaryHandler = (event) => {
        setSalary(event.target.value)
    }


    return <div>
        <div>
          <select onChange={(event) => onLocationHandler(event)} value={location}>
            <option value="office">office</option>
            <option value="remote">remote</option>
            <option value="Hybrid">Hybrid</option>
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
    </div>
}

export default BasicComponent;