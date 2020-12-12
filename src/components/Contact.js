import React from 'react'
import '../css/Contact.css'

export default function Contact() {
    return (
        <div className='contact-container'>
            <h1 id='contact-header'>Contact Info</h1>
            <div className='contact-content'>
                <div className='contact-subheader'>
                    <span className='contact-subtitle'>Email: </span>
                    <span className='contact-subcontent'>aandrewnngo@gmail.com</span>
                </div>
                <div className='contact-subheader'>
                    <span className='contact-subtitle'>Phone: </span>
                    <span className='contact-subcontent'>(713) 584-7285</span>
                </div>
                <span id='social-header'>Social Links</span>
                <div className='social-row'>
                    <a href="https://www.instagram.com/aandrewnngo/" target='_blank' rel="noreferrer" className='fa sq fa-instagram'></a>
                    <a href="https://www.linkedin.com/in/andrew-ngo-ba043716b/" target='_blank' rel="noreferrer" className='fa sq fa-linkedin'></a>
                    <a href="https://github.com/anngo14" target='_blank' rel="noreferrer" className='fa sq fa-github'></a>
                </div>
            </div>
        </div>
    )
}
