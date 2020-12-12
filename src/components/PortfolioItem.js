import React, { Component } from 'react'
import { Badge, Card } from 'react-bootstrap'
import '../css/PortfolioItem.css'

export default class PortfolioItem extends Component {
    state = {
        slide: false
    }
    toggle = () => {
        this.setState({
            slide: !this.state.slide
        });
    }
    render() {
        return (
            <Card className='portfolio-item' slide={this.state.slide ? 1 : 0}>
                <div className='portfolio-img' onClick={this.toggle}></div>
                <div className='item-header'>
                    <div className='item-title'>
                        <Card.Title>{this.props.project.title}</Card.Title>
                        <Card.Subtitle>{this.props.project.category}</Card.Subtitle>
                    </div>
                    <div className='item-links' style={{width: this.props.project.live ? '8em' : '5em'}}>
                        <a className='item-link' href={this.props.project.code} target='_blank'>Code</a>
                        {this.props.project.live && <a className='item-link' href={this.props.project.live} target='_blank'>Live</a> }
                        <span className='item-link' onClick={this.toggle}>Info</span>
                    </div>
                </div>
                <div className='item-information' slide={this.state.slide ? 1 : 0}>
                    <div className='information-header'>
                        <div className='information-close' onClick={this.toggle}>✕</div>
                    </div>
                    <div className='information-content'>
                        {this.props.project.more}
                    </div>
                    <div className='information-tags'>
                        {this.props.project.tags.map((tag, i) => {
                            return <Badge variant="dark" className='tag' key={i}>{tag}</Badge>
                        })}
                    </div>
                </div>
            </Card>
        )
    }
}
