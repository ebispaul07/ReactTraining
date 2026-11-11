import React from 'react'
import Button from 'react-bootstrap/Button';

import Home from './Pages/Home'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Default from './Pages/Default'
import { Routes,Route,Link } from 'react-router-dom';


const MainRouter = () => {
  return (
    <div className='m-2'>
        <h1 className='text-center'>React Routing</h1>
        
        <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/service"}>Service</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<Default/>}/>
            
        </Routes>



    </div>
  )
}

export default MainRouter