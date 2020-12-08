import React from 'react'
import '../css/Nav.css'
import resume from './resource/Resume.pdf'

export default function Nav() {
    return (
        <div className='nav-container'>
            <div className='nav-btn'>
                <div className='burger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <div>
                    <span id='nav-menu-title'>MENU</span>
                </div>
            </div>
            <div className='nav-menu'>
                <a href='#' className='nav-link'>Home</a>
                <a href={resume} target='_blank' className='nav-link'>Resume</a>
                <a href='#' className='nav-link'>Portfolio</a>
                <a href='#' className='nav-link'>Contact</a>
            </div>
        </div>
    )
}
