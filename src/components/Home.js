import React from 'react'
import './Home.css'
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";


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

                {/* ------------- */}
                <div className='icon_sec'>
                <div class="grid  grid-cols-4 grid-flow-col gap-4">
                        <a href='https://www.facebook.com/jagritimishra.jagritimishra.33/'><BiLogoFacebook /></a>
                        <a href='#'><BiLogoTwitter /></a>
                        <a href='#'><BiLogoLinkedin /></a>
                        <a href='https://github.com/JagritiMishra0'><BiLogoGithub /></a>
                    </div>

                    {/* <div className='mt-4'>Download CV</div> */}
                </div>
                <div className='home-bar-imghover'></div>
            </section>
        </>
    )
}

export default Home