import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../css/Experience.css'

export default function Experience() {
    let experiences = [
        {
            date: "2011 - present",
            title: "Creative Director",
            subtitle: "Miamai, FL", 
            description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
            iconcolor: 'rgb(33, 150, 243)',
            textcolor: '#FDFEFE',
            bgcolor: 'rgb(33, 150, 243)',
            arrowRight: '7px solid  rgb(33, 150, 243)'
        },
        {
            date: "2011 - present",
            title: "Creative Director",
            subtitle: "Miamai, FL", 
            description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
            iconcolor: 'rgb(233, 30, 99)',
            textcolor: 'black',
            bgcolor: 'white',
        }
    ];
    return (
        <div className='experience-container'>
            <h1>Experience</h1>
            <VerticalTimeline className='experience-content'>
                {experiences.map((experience) => {
                    return (
                    <VerticalTimelineElement
                        date={experience.date}
                        dateClassName='vertical-timeline-element-date'
                        iconStyle={{background: experience.iconcolor}}
                        contentStyle={{background: experience.bgcolor, color: experience.textcolor}}
                        contentArrowStyle={{borderRight: experience.arrowRight}}
                    >
                        <h3>{experience.title}</h3>
                        <h4>{experience.subtitle}</h4>
                        <p>{experience.description}</p>
                    </VerticalTimelineElement>)
                })}
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
            </VerticalTimeline>
        </div>
    )
}
