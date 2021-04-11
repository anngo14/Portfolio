import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../css/Experience.css'

export default function Experience() {
    let experiences = [
        {
            date: "2021 - present",
            title: "Software Developer",
            company: "General Motors",
            subtitle: "Austin, TX", 
            iconcolor: 'rgb(33, 150, 243)',
            bgcolor: 'rgb(33, 150, 243)',
            arrowRight: '7px solid  rgb(33, 150, 243)',
            textcolor: 'white',
        },
        {
            date: "2019 - 2021",
            title: "Video Operations Analyst",
            company: "YouTube TV",
            subtitle: "Austin, TX", 
            iconcolor: 'rgb(33, 150, 243)',
            textcolor: 'black',
        },
        {
            date: "2019 - 2021",
            title: "Software Engineer",
            company: "Tata Consultancy Services",
            subtitle: "Austin, TX", 
            iconcolor: 'rgb(33, 150, 243)',
            textcolor: 'black',
        },
        {
            date: "June 2018 - September 2018",
            title: "Web Designer",
            company: "Yarcort",
            subtitle: "Kingsley, PA", 
            iconcolor: 'rgb(16, 204, 82)',
            textcolor: 'black',
        },
        {
            date: "2014 - 2019",
            title: "Student",
            company: "The University of Texas at San Antonio",
            subtitle: "San Antonio, TX", 
            iconcolor: 'rgb(233, 30, 99)',
            textcolor: 'black',
        },
    ];
    return (
        <div className='experience-container'>
            <h1>Experience</h1>
            <VerticalTimeline className='experience-content'>
                {experiences.map((experience, i) => {
                    return (
                    <VerticalTimelineElement
                        key={i}
                        date={experience.date}
                        dateClassName='vertical-timeline-element-date'
                        iconStyle={{background: experience.iconcolor}}
                        contentStyle={{background: experience.bgcolor, color: experience.textcolor}}
                        contentArrowStyle={{borderRight: experience.arrowRight}}
                    >
                        <h3>{experience.title}</h3>
                        <h4>{experience.company}</h4>
                        <h5>{experience.subtitle}</h5>
                        <p>{experience.description}</p>
                    </VerticalTimelineElement>)
                })}
            </VerticalTimeline>
        </div>
    )
}
