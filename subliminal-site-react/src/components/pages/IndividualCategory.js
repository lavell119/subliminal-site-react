import React from 'react'
import { useParams } from 'react-router'
import SubliminalData from './data.json'

export default function IndividualCategory() {
    let param = useParams()
    console.log('testing')
    console.log(param)

  return (
    <>
    <div>{param.id}</div>
    </>
  )
}
