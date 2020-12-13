import React from 'react'
import '../css/Skills.css'
import SkillRow from './SkillRow';

export default function Skills() {
    let programmingRow = {
        title: "Programming Languages",
        items: [
            {
                title: "Java",
                image: "java.png"
            },
            {
                title: "C",
                image: "c.png"
            }, 
            {
                title: "Javascript",
                image: "js.png"
            },
            {
                title: "Typescript",
                image: "ts.png"
            }
        ]
    };
    let dbRow = {
        title: "Databases",
        items: [
            {
                title: "MySQL",
                image: "MySQL.png"
            },
            {
                title: "PostgreSQL",
                image: "postgresql.png"
            },
            {
                title: "MongoDB",
                image: "mongodb.png"
            }
        ]
    };
    let otherRow = {
        title: "Other",
        items: [
            {
                title: "Angular",
                image: "angular.png"
            },
            {
                title: "React",
                image: "react.png"
            },
            {
                title: "Angular Material",
                image: "material.png"
            },
            {
                title: "Bootstrap",
                image: "bootstrap.png"
            }
        ]
    };

    return (
        <div className='skills-container' id='skills'>
            <h1>Skills</h1>
            <SkillRow row={programmingRow}/> 
            <SkillRow row={dbRow}/>
            <SkillRow row={otherRow}/>
        </div>
    )
}
