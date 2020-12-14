import React from 'react'
import '../css/Nav.css'

function Nav(props) {
    let toggle = () => {
        let menuState = props.menuState();
        if(menuState === false || menuState === null){
            return props.data(true);
        } else{
            return props.data(false);
        }
    }
    
    return (
        <div className='nav-container'>
            <div className='nav-toolbar'>
                <div className='nav-btn' onClick={toggle}>
                    <div className='burger'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <div>
                        <span id='nav-menu-title'>MENU</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav
