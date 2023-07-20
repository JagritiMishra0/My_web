import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <section className='home_bar' id='home_bar'>
                <div className='home-content'>
                    <h1>Hi , I'm <span>Jagriti Mishra</span></h1>
                    <div className='text-animated'>
                        <h3>Frontend Web Developer</h3>
                    </div>
                    <p>How do I explain about development?
                        Development is a process that creates growth, progress
                        , positive change or the addition of physical, economic, environmental,
                        social and demographic components.</p>
                
                <div className='btn-box'>
                    <a href='/' className='btn' >Hire me</a>
                    <a href='/' className='btn' >Let's Talk</a>
                </div>
                </div>
            </section>
        </>
    )
}

export default Home