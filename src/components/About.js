import React from 'react'
import '../css/About.css'
import image from './resource/selfie.jpg'

export default function About() {
    return (
        <div className='about-container' id='about'>
            <h1>About Me</h1>
            <div className='about-content'>
                <div className='content-container'>
                    <p>I am a Full-Stack Software Engineer that is based from TX. Graduated from The University of Texas at San Antonio in 2019, I have always been interested in building custom applications and tools.</p>
                </div>
                <div className='img-container'>
                    <img src={image} alt='Andrew Ngo'></img>
                </div>
            </div>
        </div>
    )
}
