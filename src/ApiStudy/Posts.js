import React, { useEffect, useState } from 'react'

const Posts = () => {

    const[posts,setPosts]=useState([``]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts.splice(0,10)))
        
    },[])

   




  return (
    <div>
        <h1>Fetch an API</h1>
        {
            posts.map((post)=>(
                
                <div key={post.id}>
                    <h2 className='bg-warning m-2'>Title: {post.title}</h2>
                    <h4 className='bg-info m-2'>Description: {post.body}</h4>
                </div>
            ))
        }
       
    </div>
  )
}

export default Posts