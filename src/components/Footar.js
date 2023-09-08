import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";


const Footar = () => {
    return (
        <>
            <footer className='footar'>
                <div className='footar-text'>
                    <p>Cpoyright &copy; 2023 by jagriti |  All Rights Reserved</p>
                </div>
                <div className='footar-icon'>
                    <a href='#'><BsFillArrowUpCircleFill  className='icon'/></a>
                </div>
            </footer>
        </>
    )
}

export default Footar