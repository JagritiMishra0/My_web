import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <header className='header_bar'>
               {/* logo */}
            <a   href='/' className='logo_bar'>Jagriti.</a>
            <nav className='nav_bar'>
                <a href=''className='active'>Home</a>
                <a href='' >About</a>
                <a href='' >Education</a>
                <a href='' >Skills</a>
                <a  href='' >Contact</a>
            </nav>  
    </header>
    </>
  )
}

export default Header