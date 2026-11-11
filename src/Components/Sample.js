import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const Sample = () => {
   const [color,setColor] = useState("Black");

   const changeColor = () => {
    setColor(color==="Black"?"Red":"Black")
   }


  return (
    <div>
        <h1>My Favourite colour is {color}</h1>
        <Button onClick={changeColor}>Change color</Button>
    </div>
  )
}

export default Sample