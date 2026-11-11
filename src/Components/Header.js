import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button';


function Header() {

  const clickHandle = () => {
    console.log("clicked me")
  }

  const dbClickHandle= (name) => {
    alert("Hello "+name)
  }

  const onChangeHandle= () => {
    alert("Hello ")
  }

  const onMouseOverHandle= () => {
    alert("Hello u hovered me")
  }

  return (
    <div>
        <h1 className="header">Header Component</h1>
        <button className="btn-login">Login</button>
        <button className="btn-logout">Logout</button>
        <Button onClick={clickHandle} variant="primary">click me</Button>
        {/*<h1 onDoubleClick={() =>dbClickHandle("Ebi")}>double Click</h1>
        <input onChange={() => onChangeHandle("Ebi")} type="text"/>
        <h1 onMouseOver={onMouseOverHandle}>Mouse over</h1>*/}
    </div>
  )
}

export default Header