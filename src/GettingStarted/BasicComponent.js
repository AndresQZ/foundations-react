import { useState } from "react";

const CREATIONAL = 'creational'
const STRUCTURAL = 'structural'
const BEHAVIORAL = 'behavioral'

const creational = [
    'Singleton',
    'Factory Method',
    'Abstract Factory',
    'Builder',
    'Prototype'
]

const structural = [
    'Adapter',
    'Bridge',
    'Composite',
    'Decorator',
    'Facade',
    'Flyweight',
    'Proxy'
]

const behavioral = [
    'Command',
    'Interpreter',
    'Iterator',
    'Mediator',
    'Memento',
    'Observer',
    'State',
    'Strategy',
    'Template Method',
    'Visitor'
]

const clasificationMap = new Map(
      [
        [CREATIONAL, creational],
        [STRUCTURAL, structural],
        [BEHAVIORAL, behavioral]
      ]
)


const BasicComponent = () => {
    const [designPatternClasification, setDesignPatternClasification] =  useState(CREATIONAL)
    const [clasificationList, setClasificationList] =  useState(creational)


    const onDesignPatternClasificationHandler = (event) => {
      setDesignPatternClasification(event.target.value)
      setClasificationList(clasificationMap.get(event.target.value))
    }


    return (
       <div>
        <h1>Basic component, using useState hook</h1>
        <div>
         <select onChange={onDesignPatternClasificationHandler}>
            <option value={CREATIONAL}> Creational </option>
            <option value={STRUCTURAL}> Structural </option>
            <option value={BEHAVIORAL}> Behavioral </option>
         </select>
        </div>

        <div>
          <div>
            {clasificationList.map((desingPattern) => {
              return <p key={desingPattern}>{desingPattern}</p>
            })}
          </div>
        </div>

        <span>{designPatternClasification}</span>
    </div>
    )
}

export default BasicComponent;