import React from 'react'

const Childprop = (props)=>{
    return(
        <h1>I like {props.flavour} icecream.</h1>
    )
}

const newPropsStudy = () => {
  return (
    <div>
        <Childprop flavour="vanilla"/>
    </div>
  )
}

export default newPropsStudy