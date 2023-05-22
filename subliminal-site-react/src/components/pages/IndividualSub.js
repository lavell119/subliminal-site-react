import React from 'react'
import { useParams } from 'react-router'


export default function IndividualSub() {
  let param =useParams()
  console.log(param)
  return (
    <div>{param.id}</div>
  )
}
