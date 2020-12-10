import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/SkillRow.css'

export default function SkillRow(props) {
    return (
        <Card className='shelf-container'>
            <Card.Body>
                <h2>{props.row.title}</h2>
                <div className='shelf-content'>
                    {props.row.items.map((item, i) => {
                        return (
                            <div className='shelf-item' key={i}>
                                <div className='shelf-icon'>
                                </div>
                                <span className='shelf-title'>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </Card.Body>
        </Card>
    )
}
