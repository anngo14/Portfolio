import React, { Component } from 'react'
import { Badge, Card } from 'react-bootstrap'
import '../css/PortfolioItem.css'
export default class PortfolioItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            slide: null
        }
    }
    toggle = () => {
        let toggleState = this.getAnimationState();
        if(toggleState === 0 || toggleState === 2){
            this.setState({
                slide: true
            });
        } else{
            this.setState({
                slide: false
            });
        }
    }
    getAnimationState = () => {
        const toggleState = this.state.slide;
        console.log(toggleState);
        if(toggleState === true){
            return 1;
        } else if(toggleState === false){
            return 0;
        } else{
            return 2;
        }
    }
    render() {
        return (
            <Card className='portfolio-item' slide={this.getAnimationState()}>
                <div className='portfolio-img' onClick={this.toggle}>
                    <img src={process.env.PUBLIC_URL + '/resource/portfolio/' + this.props.project.image} alt={this.props.project.title} className='item-img'></img>
                </div>
                <div className='item-header'>
                    <div className='item-title'>
                        <Card.Title>{this.props.project.title}</Card.Title>
                        <Card.Subtitle>{this.props.project.category}</Card.Subtitle>
                    </div>
                    <div className='item-links' style={{width: this.props.project.live ? '8em' : '5em'}}>
                        <a className='item-link' href={this.props.project.code} target='_blank' rel="noreferrer">Code</a>
                        {this.props.project.live && <a className='item-link' href={this.props.project.live} target='_blank' rel="noreferrer">Live</a> }
                        <span className='item-link' onClick={this.toggle}>Info</span>
                    </div>
                </div>
                <div className='item-information' slide={this.getAnimationState()}>
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
