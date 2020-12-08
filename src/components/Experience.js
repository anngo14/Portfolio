import React from 'react'
import '../css/Experience.css'

export default function Experience() {
    return (
        <div className='experience-container'>
            <h1>Experience</h1>
            <div className='experience-content'>
                <span className='experience-year'>2010</span>
                <div className='experience'>
                    <div className='experience-dot'></div>
                    <div className='experience-line'></div>
                    <div className='experience-dot'></div>
                </div>
                <span className='experience-year'>2020</span>
            </div>
        </div>
    )
}
