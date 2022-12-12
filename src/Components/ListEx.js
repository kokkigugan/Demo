import React from 'react'

export default function ListEx() {
    const Cars = ["nano","breeza","kia"]
const listCars =  Cars.map((i)=>i+" Good ");

console.log(listCars);
  return (
    <div>
    {listCars}
    </div>
  )
}
