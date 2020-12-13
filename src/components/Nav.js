import React from 'react'
import '../css/Nav.css'
import resume from './resource/Resume.pdf'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    state = {
        menuToggle: null,
        menuTimeout: null
    }
    toggle = () => {
        let menuState = this.getAnimationState();
        if(menuState === 0 || menuState === 2){
            this.setState({
                menuToggle: true
            });
        } else{
            this.setState({
                menuToggle: false
            })
        }
    }
    getAnimationState = () => {
        const menuState = this.state.menuToggle;
        if(menuState === true){
            return 1;
        } else if(menuState === false){
            return 0;
        } else{
            return 2;
        }
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
                <div className='nav-menu' slide={this.getAnimationState()} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
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
