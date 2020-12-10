import React, { Component } from 'react'
import { Badge, Card } from 'react-bootstrap'

export default class PortfolioItem extends Component {
    state = {
        slide: false
    }
    toggle = () => {
        this.setState({
            slide: !this.state.slide
        });
        console.log(this.state.slide);
    }
    render() {
        return this.props.projects.map((project) => {
            return(
                <Card className='portfolio-item'>
                    <div className='portfolio-img'></div>
                    <div className='item-header'>
                        <div className='item-title'>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Subtitle>{project.category}</Card.Subtitle>
                        </div>
                        <div className='item-links'>
                            <span className='item-link'>Code</span>
                            {project.live && <span className='item-link'>Live</span> }
                            <span className='item-link' onClick={this.toggle}>Info</span>
                        </div>
                    </div>
                    <div className='item-information' slide={this.state.slide}>
                        <div className='information-header'>
                            <div className='information-close' onClick={this.toggle}>x</div>
                        </div>
                        <div className='information-content'>
                            {project.more}
                        </div>
                        <div className='information-tags'>
                            <Badge variant="dark" className='tag'>Primary</Badge>
                            <Badge variant="dark" className='tag'>Primary</Badge>
                            <Badge variant="dark" className='tag'>Primary</Badge>
                        </div>
                    </div>
                </Card>
            )
        })
    }
}
