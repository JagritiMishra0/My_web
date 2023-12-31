import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <section className='contact' id='contact'>
                <h2 className='heading'>Contact <span>Me!</span></h2>
                <form action='#'>
                    <div className='input-box'>
                        <div className='input-field'>
                            <input type='text' placeholder='Full Name' required />
                            <span className='focus' ></span>
                        </div>
                        <div className='input-field'>
                            <input type='text' placeholder='Email..' required />
                            <span className='focus' ></span>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------ */}
                    <div className='input-box'>
                        <div className='input-field'>
                            <input type='number' placeholder='Mobile Number' required />
                            <span className='focus' ></span>
                        </div>
                        <div className='input-field'>
                            <input type='text' placeholder='Email..Subject' required />
                            <span className='focus' ></span>
                        </div>
                    </div>
                    <div className='textarea-field'>
                        <textarea name='' id='' cols='10' rows='6' placeholder='your Message' required> </textarea>
                        <span className='focus' ></span>
                    </div>
                    <div className='btn-boxs btns1'>
                        <button type='submit' className='btn1'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact