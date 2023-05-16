import React from 'react'
import { useParams } from 'react-router'
import SubliminalData from './data.json'

export default function IndividualCategory() {
  
    const categories=["Business and Finance", "Health", "Love and Romance", "Physical Changes", "Mental Health", "Self Improvement"]

    let param = useParams()
    console.log('testing')
    console.log(param)
    let id=param.id
    let output=SubliminalData.filter(data => data.category === categories[id])
    let outputNames=output.map(output => output.name)

    console.log(output)

  return (
    <>
    <div className="red">{param.id}</div>
    <br></br>
    {/* {SubliminalData.map(data=>
        <div>{data.name}</div>
    )} */}
    {/* {outputNames} */}
    {outputNames.map(name=>
      <div className="cat_subliminals">{name}</div>
    )}

    </>
  )
}
