import React from 'react'
import { useParams } from 'react-router'
import SubliminalData from './data.json'

export default function IndividualCategory() {
    let param = useParams()
    console.log('testing')
    console.log(param)

  return (
    <>
    <div className="red">{param.id}</div>
    <br></br>
    {SubliminalData.map(data=>
        <div>{data.name}</div>
    )}
    </>
  )
}
