import React, { useEffect, useState } from 'react'

const Effects = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Side Effect")
    },[])//[] dependency List

  return (
    <div>
        <h1>Side Effects</h1>
        

        <button onClick={()=>setCount(count+1)}>+</button>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count-1)}>-</button>
        

    </div>
  )
}

export default Effects