import React from 'react'
import '../css/Skills.css'
import SkillRow from './SkillRow';

export default function Skills() {
    let programmingRow = {
        title: "Programming Languages",
        items: [
            {
                title: "Java"
            },
            {
                title: "C"
            }, 
            {
                title: "JS"
            },
            {
                title: "TS"
            }
        ]
    };
    let dbRow = {
        title: "Databases",
        items: [
            {
                title: "MySQL"
            },
            {
                title: "PostgreSQL"
            },
            {
                title: "MongoDB"
            }
        ]
    };
    let otherRow = {
        title: "Other",
        items: [
            {
                title: "Angular"
            },
            {
                title: "React"
            },
            {
                title: "Angular Material"
            },
            {
                title: "Bootstrap"
            }
        ]
    };

    return (
        <div className='skills-container'>
            <h1>Skills</h1>
            <SkillRow row={programmingRow}/> 
            <SkillRow row={dbRow}/>
            <SkillRow row={otherRow}/>
        </div>
    )
}
