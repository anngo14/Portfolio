import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/Portfolio.css'

export default function Portfolio() {
    return (
        <div className='portfolio-container'>
            <h1>Portfolio</h1>
            <div className='portfolio-content'>
                <div className='portfolio-row'>
                    <Card className='portfolio-item'>
                        <div className='portfolio-img'></div>
                        <Card.Body className='item-header'>
                            <div className='item-title'>
                                <Card.Title>Project 1</Card.Title>
                                <Card.Subtitle>Category</Card.Subtitle>
                            </div>
                            <div className='item-links'>
                                <span>Code</span>
                                <span>Live</span>
                                <span>Info</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='portfolio-item'>
                        <div className='portfolio-img'></div>
                        <Card.Body className='item-header'>
                            <div className='item-title'>
                                <Card.Title>Project 2</Card.Title>
                                <Card.Subtitle>Category</Card.Subtitle>
                            </div>
                            <div className='item-links'>
                                <span>Code</span>
                                <span>Live</span>
                                <span>Info</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='portfolio-item'>
                        <div className='portfolio-img'></div>
                        <Card.Body className='item-header'>
                            <div className='item-title'>
                                <Card.Title>Project 3</Card.Title>
                                <Card.Subtitle>Category</Card.Subtitle>
                            </div>
                            <div className='item-links'>
                                <span>Code</span>
                                <span>Live</span>
                                <span>Info</span>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='portfolio-row'>
                    <Card className='portfolio-item'>
                        <div className='portfolio-img'></div>
                        <Card.Body className='item-header'>
                            <div className='item-title'>
                                <Card.Title>Project 4</Card.Title>
                                <Card.Subtitle>Category</Card.Subtitle>
                            </div>
                            <div className='item-links'>
                                <span>Code</span>
                                <span>Live</span>
                                <span>Info</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='portfolio-item'>
                        <div className='portfolio-img'></div>
                        <Card.Body className='item-header'>
                            <div className='item-title'>
                                <Card.Title>Project 5</Card.Title>
                                <Card.Subtitle>Category</Card.Subtitle>
                            </div>
                            <div className='item-links'>
                                <span>Code</span>
                                <span>Live</span>
                                <span>Info</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='portfolio-item'>
                        <div className='portfolio-img'></div>
                        <Card.Body className='item-header'>
                            <div className='item-title'>
                                <Card.Title>Project 6</Card.Title>
                                <Card.Subtitle>Category</Card.Subtitle>
                            </div>
                            <div className='item-links'>
                                <span>Code</span>
                                <span>Live</span>
                                <span>Info</span>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
