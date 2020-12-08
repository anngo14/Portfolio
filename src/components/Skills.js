import React from 'react'
import '../css/Skills.css'

export default function Skills() {
    return (
        <div className='skills-container'>
            <h1>Skills</h1>
            <div className='shelf-container'>
                <h2>Programming Languages</h2>
                <div className='shelf-content'>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                        </div>
                        <span className='shelf-title'>Java</span>
                    </div>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                        </div>
                        <span className='shelf-title'>C</span>
                    </div>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                        </div>
                        <span className='shelf-title'>JS</span>
                    </div>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                        </div>
                        <span className='shelf-title'>TS</span>
                    </div>
                </div>
            </div>
            <div className='shelf-container'>
                <h2>Databases</h2>
                <div className='shelf-content'>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                        </div>
                        <span className='shelf-title'>MySQL</span>
                    </div>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                        </div>
                        <span className='shelf-title'>PostgreSQL</span>
                    </div>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                        </div>
                        <span className='shelf-title'>MongoDB</span>
                    </div>
                </div>
            </div>
            <div className='shelf-container'>
                <h2>Other</h2>
                <div className='shelf-content'>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                        </div>
                        <span className='shelf-title'>Angular</span>
                    </div>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                        </div>
                        <span className='shelf-title'>React</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
