import React from 'react'
import '../css/Timeline.css'

export default function Timeline() {
    return (
        <div className='timeline-container'>
            <h1>Timeline</h1>
            <div className='timeline-content'>
                <span className='timeline-year'>2010</span>
                <div className='timeline'>
                    <div className='timeline-dot'></div>
                    <div className='timeline-line'></div>
                    <div className='timeline-dot'></div>
                </div>
                <span className='timeline-year'>2020</span>
            </div>
        </div>
    )
}
