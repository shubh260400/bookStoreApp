import React from 'react';
import Home from "./home/home"
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './components/Signup';



function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>



    </>
  )
}

export default App;