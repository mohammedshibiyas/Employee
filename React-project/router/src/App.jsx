import { useState } from 'react'
import Home from './Component/Body/Home/Home'
import About from './Component/Body/About/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar'

import View from './Component/Body/view/View'
import Register from './Component/Body/register/Register'



function App() {


  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route  path="/" Component={Home} />
        <Route  path="/about" Component={About} />
        <Route path="/view/:id" Component={View}/>
        <Route  path="/register" Component={Register} />
        
      </Routes>
    
    </BrowserRouter>
  
    </>
  )
}

export default App
