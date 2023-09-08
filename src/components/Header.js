import React, { useState } from 'react'
import './Header.css'
import { AiOutlineMenu } from "react-icons/ai";

// import { NavLink } from 'react-router-dom'

const Header = () => {
  const [nav , setNav] = useState(false)
  const handleClick = () =>(
    setNav(!nav)
  )
  // window.onscroll = () =>{
  //   let header = document.querySelector('header');
  //   header.classList.toggle('sticky' , window.scrollY> 100 );
  // }
  return (
    <>
    <div className='header'>
               {/* logo */}
            <a   href='/' className='logo_bar'>Jagriti.</a>
            <nav className='nav_bar'>
              {/* <a href=''className='active'><NavLink to='./'>Home</NavLink></a>
                <a href='' ><NavLink to='./about'>About</NavLink> </a>
                <a href='' > <NavLink to='./education'>Education</NavLink> </a>
                <a href='' ><NavLink to='./skills'>Skills</NavLink></a>
                <a  href='' ><NavLink to='./contact'>Contact</NavLink></a> */}
<div id='menu-icon'><AiOutlineMenu  id='menu-icon'/></div>
                 <a href='#'className='active'>Home</a>
                <a href='#' >About </a>
                <a href='#' >Education </a>
                <a href='#' >Skills</a>
                <a  href='#' >Contact</a>
            </nav>  
    </div>
    </>
  )
}

export default Header