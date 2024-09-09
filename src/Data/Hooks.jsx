import React, { useState } from 'react'

function Hooks() {
    const [Count , setCount] = useState(0)
  return (
    <div>
        <h1>{Count}</h1>
        <button onClick={()=>setCount(Count+1)}>+</button>
        <button onClick={()=>setCount(Count-1)}>-</button>
        <button onClick={()=>setCount(Count*0)}>reset</button>
    </div>
  )
}

export default Hooks