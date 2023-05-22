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
    console.log(categories[id])
    let outputNames=output.map(output => output.name)
    

    console.log(output)

  return (
    <div className="individual_category">
      <h2>{categories[param.id]}</h2>
      <br></br>
      <div>
        {outputNames.map(name=>
        <a href={`/subliminals/${name}`}>
            <div className="cat_subliminals">{name}</div>
        </a>
        
      )}
      </div>
      {/* {SubliminalData.map(data=>
          <div>{data.name}</div>
      )} */}
      {/* {outputNames} */}
      
    </div>

    
  )
}
