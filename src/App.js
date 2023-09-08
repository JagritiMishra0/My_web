import React from 'react'
import {
  Route,
  Routes,
  Router
} from 'react-router-dom'
// import Header from './components/Header'
// import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footar from './components/Footar'
function App() {
  return (
    <>
    {/* <Header/> */}
    {/* <Hero/> */}
     {/* <Routes>
     <Route path='/'element={<Hero/>} />
     <Route path='/home'element={<Home/>} />
  <Route path='/about'element={<About/>} />
  <Route path='/education'element={<Education/>} />
  <Route path='/skils'element={<Skills/>} />
   </Routes> */}
    {/* <Header/> 
    <Home/> */}
    <Hero />
    <About/>
    <Education/>
    <Skills/>
    <Contact/>
    <Footar/>
    </>
  )
}
   
export default App