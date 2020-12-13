import React from 'react'
import '../css/Nav.css'
import resume from './resource/Resume.pdf'
import { Link } from 'react-router-dom'

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
                    <Link to='/home' className='nav-link'>Home</Link>
                    <a href={resume} target='_blank' rel="noreferrer" className='nav-link'>Resume</a>
                    <Link to='/portfolio' className='nav-link'>Portfolio</Link>
                    <Link to='/contact' className='nav-link'>Contact</Link>
                </div>
            </div>
        )
    }
}
export default Nav
