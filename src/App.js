import React from 'react'
import {
  Route,
  Routes,
  Router
} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
function App() {
  return (
    <>
    {/* // <Routes> */}
     {/* <Route path='/'element={<Home/>} />
    //   <Route path='/flight'element={<Flights/>} />
    //    */}
    {/* // </Routes>/ */}
    <Header/> 
    <Home/>
    </>
  )
}
   
export default App