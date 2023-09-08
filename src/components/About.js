import React from 'react'
import './About.css';
import img1 from './bh-my.jpeg'

const About = () => {
    return (
        <>
            <section className='about' id='about'>
                <div className='about-content'>
                    <h2 className='heading'>About <span>Me</span></h2>
                    <div className='about-img'>
                        <img className=' items-center justify-center tex' src={img1} alt='my image' />
                        <span className='circle-span'></span>
                    </div>
                    <div className='about-content items-center'>
                        <h3>Frontend Developer!</h3>
                        <p>A Front-End Developer is someone who creates websites and web applications.
                            The difference between Front-End and Back-End is that Front-End refers to how a web page looks,
                            while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.</p>
                       
                    </div>
                    <div className=' btn-boxs btns1 '>
                            <a href='#' className=' rounded-lg btn1'>Read More</a>
                        </div>
                </div>
            </section>
        </>
    )
}

export default About