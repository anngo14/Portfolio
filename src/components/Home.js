import React from 'react'
import Introduction from './Introduction'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'

export default function Home() {
    return (
        <div>
            <Introduction header="Andrew Ngo" subheader="Software Engineer" links/>
            <About />
            <Experience />
            <Skills />
        </div>
    )
}
