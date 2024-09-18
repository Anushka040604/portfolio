import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Education/>
     <MyWork/>
     <Contact/>
    </>
  )
}

export default App
