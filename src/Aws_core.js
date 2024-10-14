import { useState } from "react"

function AwsCore() {
  const awsCoreComponent = ['DynamoDb', 'SQS', "SNS", "Codebuild"]
  let [selectedItem, setSeletedItem] = useState('')

  const handler = ( component, index)=> {
    console.log(`selected Item :: ${component} - ${index}`)
    setSeletedItem(component)
  }
 
  return <div style={{"background": " #ccffe6"}}>
      Some of the most basics component on AWS
     {
        awsCoreComponent.map( (component, index) => {
            return <p key={index} onClick={ () => {handler(component, index)}}> {component} </p>
        })
     }
     <p> Selected Item :::  {selectedItem}</p>
  </div>
}