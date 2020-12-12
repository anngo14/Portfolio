import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/SkillRow.css'

export default function SkillRow(props) {
    return (
        <Card className='shelf-container'>
            <Card.Body>
                <h2 id='shelf-header'>{props.row.title}</h2>
                <div className='shelf-content'>
                    {props.row.items.map((item, i) => {
                        return (
                            <div className='shelf-item' key={i}>
                                <div className='shelf-icon'>
                                    <img src={process.env.PUBLIC_URL + "/resource/skills/" + item.image} alt={item.title} className='icon-img'></img>
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
