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
                    <span>ig</span>
                    <span>linked_in</span>
                    <span>github</span>
                </div>
            </div>
        </div>
    )
}
