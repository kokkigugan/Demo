import React, { useState,useEffect } from 'react'

export default function StsteEx() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
      setCount(count+1)
      setCount(count-1)
      console.log({count})
    })
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click!</button>
    <button onClick={()=>{setCount(count+5)}}>Click!</button>
    <button onClick={()=>{setCount(count-1)}}>Click!</button>
    </div>

  )
}