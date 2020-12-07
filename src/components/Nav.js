import React from 'react'
import '../css/Nav.css'
export default function Nav() {
    return (
        <div className='nav-container'>
            <div className='burger'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <div className='nav-menu'>
                <a href='#' className='nav-link'>Home</a>
                <a href='#' className='nav-link'>Resume</a>
                <a href='#' className='nav-link'>Portfolio</a>
                <a href='#' className='nav-link'>Contact</a>
            </div>
        </div>
    )
}
