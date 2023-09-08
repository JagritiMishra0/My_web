import React from 'react'
// import './Education.css'

import { BsFillCalendar3WeekFill } from "react-icons/bs";


function Education() {
    return (
        <>
            <section className='edu text-center' id='edu'>
                <h2 className='text-5xl text-center'>My <span>Journey</span></h2>
                <div className='edu-row font-serif P-6 '>
                    <div className='text-3xl p-8'>Education</div>
                    <div className='all-edu'>
                    <div className=" all-txt rounded-xl md:text-sm border-double border-4 p-6 border-sky-500 transition duration-1000 hover:bg-sky-500 hover:border-sky-950  hover:text-sky-950">
                        <div><h2>2017-2020</h2></div>
                        <div><h1>Master Degree - Delhi University</h1></div>
                        <div><p>B.Com is a three-year undergraduate degree that focuses on
                            commerce, economics, business law, accountancy, taxation, and financing.</p></div>
                    </div >
                    <div className=' all-txt md:text-sm border-double border-4 border-sky-500 mt-10 rounded-lg p-6  hover:bg-sky-500 transition duration-1000 hover:border-sky-950  hover:text-sky-950'>
                        <div><h2>2015-2017</h2></div>
                        <div><h1>High school - Indian National Inter College</h1></div>
                        <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
                    </div>
                    <div className=' all-txt md:text-sm mt-10 border-double border-4 border-sky-500 rounded-lg p-6  hover:bg-sky-500 transition duration-1000 hover:border-sky-950     hover:text-sky-950' >
                        <div><h2>2013-2015</h2></div>
                        <div><h1>10th - Indian National Inter College</h1></div>
                        <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education