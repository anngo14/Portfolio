import React from 'react'
import PortfolioItem from './PortfolioItem'
import '../css/Portfolio.css'

export default function Portfolio() {
    let projects = [
        {
            title: "Vault",
            category: "Web App",
            code: "https://github.com/anngo14/Vault",
            live: "https://pwdvault.herokuapp.com/",
            more: "Web application that handles password management for users. Passwords can either be entered or  generated and are separated through categories. Users are notified when a password has not been updated after a given number of days. Password strength calculation is also implemented to show users how secure their passwords are.",
            tags: ["Angular2", "NodeJS", "MongoDB"]
        },
        {
            title: "Penny Pinchers",
            category: "Web App",
            code: "https://github.com/anngo14/PennyPinchers",
            live: "https://pennypinchers.herokuapp.com/",
            more: "Web application that visualizes budget and expense information for a given user. Basic budgeting tool that depicts profit/loss per month for the user depending on user input data. Financial goals are also tracked and related to a specific user in a database.",
            tags: ["Angular2", "NodeJS", "MongoDB"]
        },
        {
            title: "Random Roulette",
            category: "Android App",
            code: "https://github.com/anngo14/Roulette",
            more: "Android application that takes user input to generate an equal chance roulette wheel. This application then spins the roulette clockwise and determines an output depending on where the roulette stops. Favorite roulette lists are saved locally for reuse.",
            tags: ["Java"]
        },
        {
            title: "Angular Quiz",
            category: "Web App",
            code: "https://github.com/anngo14/AngularQuiz",
            live: "https://angular-quiz-generator.herokuapp.com/",
            more: "Simple Quiz web application that takes user input and scores the user based on how many answers given were correct. All information for the back-end is stored in JSON files including users, questions, answers, and scores.",
            tags: ["Angular2", "Angular Material", "NodeJS", "JSON"]
        },
        {
            title: "E-Library",
            category: "Java App",
            code: "https://github.com/anngo14/CS4743Assignment1",
            more: "An enterprise Java application that demonstrates a digital library system. A library that displays Book and Author information implementing an MySQL database and enterprise techniques like Singleton Pattern and Stored Procedures.",
            tags: ["Java", "JavaFX", "MySQL"]
        },
        {
            title: "DVR",
            category: "Web App",
            code: "https://github.com/anngo14/Module2",
            more: "Java application that serves as a DVR managing system. Services are categorized into various packages (Sports, Movies, Kids, etc...) which users have the option to choose/remove individual programs from.",
            tags: ["Java", "HTML5", "CSS3", "MySQL"]
        }
    ]
    return (
        <div className='portfolio-container'>
            <h1>Portfolio</h1>
            <div className='portfolio-grid'>
                {projects.map((project, i) => {
                    return <PortfolioItem project={project} key={i}/>
                })}
            </div>
        </div>
    )
}
