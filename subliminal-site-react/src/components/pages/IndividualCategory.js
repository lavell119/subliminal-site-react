import React from 'react'
import { useParams } from 'react-router'

export default function IndividualCategory() {
    let param = useParams()
    console.log('testing')
    console.log(param)

  return (
    <>
    <div>IndividualCategory</div>
    <div>{param.id}</div>
    </>
  )
}
