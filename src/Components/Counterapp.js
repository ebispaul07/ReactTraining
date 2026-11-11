import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';


const Counterapp = () => {

    const [count,setCount] = useState(0);

    const Counter = ()=>{
        setCount(count+1)
    }

    const Decounter = () =>{
        setCount(count-1)
    }


  return (
    <div>
        <Button className="m-2 bg-success" onClick={Counter}>+</Button>
        {count}
        <Button className="m-2 bg-danger" onClick={Decounter}>-</Button>

    </div>
  )
}

export default Counterapp