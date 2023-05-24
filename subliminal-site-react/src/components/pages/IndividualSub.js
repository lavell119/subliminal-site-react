import React from 'react'
import { useParams } from 'react-router'
import SubliminalData from './data.json'


export default function IndividualSub() {
  let sub
  let param =useParams()
  console.log(param)
  SubliminalData.forEach(subl => {
    if(subl.name === param.id){
      sub=subl.name
    }
  })
  console.log("sub =" + sub)

  return (
    <div className="individual_sub">
      <h2>{param.id}</h2>
      <p>{sub}</p>
      </div>
  )
}
