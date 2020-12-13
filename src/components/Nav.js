import React from 'react'
import '../css/Nav.css'
import resume from './resource/Resume.pdf'
import { HashLink } from 'react-router-hash-link'

class Nav extends React.Component {
    state = {
        menuToggle: false,
        menuTimeout: null
    }
    toggle = () => {
        this.setState({
            menuToggle: !this.state.menuToggle
        });
    }
    handleMouseLeave = () => {
        let timeout = setTimeout(() => {
            this.setState({
                menuToggle: false
            })
        }, 1500);
        this.setState(
            {
                menuTimeout: timeout
            }
        );
    }
    handleMouseEnter = () => {
        clearTimeout(this.state.menuTimeout);
        this.setState({
            menuToggle: true,
            menuTimeout: null
        });
    }
    render(){
        return (
            <div className='nav-container'>
                <div className='nav-btn' onClick={this.toggle}>
                    <div className='burger'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <div>
                        <span id='nav-menu-title'>MENU</span>
                    </div>
                </div>
                <div className='nav-menu' slide={this.state.menuToggle ? 1 : 0} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
                    <HashLink smooth to="#" className='nav-link'>Home</HashLink>
                    <a href={resume} target='_blank' rel="noreferrer" className='nav-link'>Resume</a>
                    <HashLink smooth to="/#about" className='nav-link'>About Me</HashLink>
                    <HashLink smooth to="/#experience" className='nav-link'>Experience</HashLink>
                    <HashLink smooth to="/#skills" className='nav-link'>Skills</HashLink>
                    <HashLink smooth to="/#portfolio" className='nav-link'>Portfolio</HashLink>
                    <HashLink smooth to="/#contact" className='nav-link'>Contact</HashLink>
                </div>
            </div>
        )
    }
}
export default Nav
