import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'; 



const User = ({userId,userName,age}) =>{
    return <>
    <h1 className='bg-warning'>Hello,{userName}</h1>
    <h4 className='bg-info'>Age,{age}</h4>
    </>
}


const Propsstudy = () => {

    const userList = [
        {userId:1,userName:"Ebi",age:24},
        {userId:2,userName:"Emi",age:14},
        {userId:3,userName:"Ebyyy",age:24}
    ]

  return (
    <div>
        <Container>
            {
                userList.map((user)=>{
                    return (
                        <User userID={user.userId} userName={user.userName} age={user.age}/>
                    )
                })
            }
        
        </Container>

    </div>
  )
}

export default Propsstudy