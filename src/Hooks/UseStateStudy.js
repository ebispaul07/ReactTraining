import React, { useState } from 'react'

const UseStateStudy = () => {
  const [count,setCount] = useState(0);

  return (
    <div>

      <h1>The Count is {count}</h1>

      <button onClick={()=>{setCount(count+1)}} className='m-2'>+</button>
      <button onClick={()=>{setCount(count-1)}} className='m-2' disabled={count<1}>-</button>
      <button onClick={()=>{setCount(count+3)}} className='m-2 bg-green'>+3</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      
    </div>
  )
}

export default UseStateStudy