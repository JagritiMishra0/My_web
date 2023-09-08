import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <>

      <section className='skills' id='skills'>
        <h2 className='heading'>Our <span>Service</span></h2>
        <div className='skills-raw'>
          <div className='skills-cols'>
            <h3 className='title'>Coding skills </h3>
            <div className='skills-box'>
              <div className='skills-cont'>
                <div className='progress'>
                  <h3>HTML <span>90%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>CSS & TAIWIND CSS <span>80%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>REACT.JS <span>70%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>JAVASCRIPT <span>65%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>AMADEUS <span>85%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='skills-cols' >
            <h3 className='title'>ProfessionalL skills </h3>
            <div className='skills-box'>
              <div className='skills-cont'>
                <div className='progress'>
                  <h3>WEB DESIGNER <span>90%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>WEB DEVELOPMENT <span>80%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>GRAPHIC DESIGNER <span>60%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>MARKET ANALYST<span>75%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
                <div className='progress'>
                  <h3>GITHUB <span>90%</span></h3>
                  <div className='bar'><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Skills