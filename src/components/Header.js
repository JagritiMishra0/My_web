import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [nav , setNav] = useState(false)
  const handleClick = () =>(
    setNav(!nav)
  )
  
  return (
    <>
    <div className='header_bar'>
               {/* logo */}
            <a   href='/' className='logo_bar'>Jagriti.</a>
            <nav className='nav_bar'>
                <a href=''className='active'>Home</a>
                <a href='' >About</a>
                <a href='' >Education</a>
                <a href='' >Skills</a>
                <a  href='' >Contact</a>
            </nav>  
    </div>
    </>
  )
}

export default Header