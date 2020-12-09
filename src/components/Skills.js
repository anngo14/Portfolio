import React from 'react'
import '../css/Skills.css'
import Card from 'react-bootstrap/Card'

export default function Skills() {
    return (
        <div className='skills-container'>
            <h1>Skills</h1>
            <Card className='shelf-container'>
                <Card.Body>
                    <h2>Programming Languages</h2>
                    <div className='shelf-content'>
                        <div className='shelf-item'>
                            <div className='shelf-icon'>
                                <img src></img>
                            </div>
                            <span className='shelf-title'>Java</span>
                        </div>
                        <div className='shelf-item'>
                            <div className='shelf-icon'>
                                <img src></img>
                            </div>
                            <span className='shelf-title'>C</span>
                        </div>
                        <div className='shelf-item'>
                            <div className='shelf-icon'>
                                <img src></img>
                            </div>
                            <span className='shelf-title'>JS</span>
                        </div>
                        <div className='shelf-item'>
                            <div className='shelf-icon'>
                                <img src></img>
                            </div>
                            <span className='shelf-title'>TS</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className='shelf-container'>
                <Card.Body>
                    <h2>Databases</h2>
                    <div className='shelf-content'>
                        <div className='shelf-item'>
                            <div className='shelf-icon'>
                                <img src></img>
                            </div>
                            <span className='shelf-title'>MySQL</span>
                        </div>
                        <div className='shelf-item'>
                            <div className='shelf-icon'>
                                <img src></img>
                            </div>
                            <span className='shelf-title'>PostgreSQL</span>
                        </div>
                        <div className='shelf-item'>
                            <div className='shelf-icon'>
                                <img src></img>
                            </div>
                            <span className='shelf-title'>MongoDB</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className='shelf-container'>
                <Card.Body>
                <h2>Other</h2>
                <div className='shelf-content'>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                            <img src></img>
                        </div>
                        <span className='shelf-title'>Angular</span>
                    </div>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                            <img src></img>
                        </div>
                        <span className='shelf-title'>React</span>
                    </div>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                            <img src></img>
                        </div>
                        <span className='shelf-title'>Angular Material</span>
                    </div>
                    <div className='shelf-item'>
                        <div className='shelf-icon'>
                            <img src></img>
                        </div>
                        <span className='shelf-title'>Bootstrap</span>
                    </div>
                </div>
                </Card.Body>
            </Card>
        </div>
    )
}
