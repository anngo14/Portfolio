import React from 'react'
import '../css/Timeline.css'

export default function Timeline() {
    return (
        <div className='timeline-container'>
            <h1>Timeline</h1>
            <div className='timeline-content'>
                <span className='timeline-end'>2010</span>
                <div className='timeline'></div>
                <span className='timeline-end'>2020</span>
            </div>
        </div>
    )
}
