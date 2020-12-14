import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavMenu.css'
import resume from './resource/Resume.pdf'

export default function NavMenu(props) {
    let getMenuState = () => {
        let menuState = props.menuState();
        if(menuState === true){ 
            return 1;
        } else if(menuState === false){
            return 0;
        } else {
            return 2;
        }
    }
    let handleMouseLeave = () => {
        props.data(false);
    }
    let handleMouseEnter = () => {
        props.data(true);
    }
    return (
        <div className='nav-menu' slide={getMenuState()} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <Link to='/home' className='nav-link'>Home</Link>
            <a href={resume} target='_blank' rel="noreferrer" className='nav-link'>Resume</a>
            <Link to='/portfolio' className='nav-link'>Portfolio</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
        </div>
    )
}
