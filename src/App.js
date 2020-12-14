import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vertical-timeline-component/style.min.css';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import NavMenu from './components/NavMenu';

export default class App extends Component{
  state = {
    menuToggle: null,
    menuTimeout: null
  };

  dataNav = (data) => {
    this.setState({
      menuToggle: data
    });
  }
  getMenuToggle = () => {
    return this.state.menuToggle;
  }
  dataNavMenu = (data) => {
    if(data){
      clearTimeout(this.state.menuTimeout);
      this.setState({
        menuToggle: true,
        menuTimeout: null
      });
    } else{
      const timeout = setTimeout(() => {
        this.setState({
          menuToggle: false
        });
      }, 1000);
      this.setState({
        menuTimeout: timeout
      });
    }
  }

  render(){
    return(
      <div className="App">
        <Router>
          <Nav data={this.dataNav} menuState={this.getMenuToggle} />
          <NavMenu data={this.dataNavMenu} menuState={this.getMenuToggle} />
            <Switch>
              <Route path='/' exact><Redirect to='/home' /></Route>
              <Route path='/home' exact component={Home} />
              <Route path='/portfolio' exact component={Portfolio} />
              <Route path='/contact' exact component={Contact} />
              <Route path='*' component={Error} />
            </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}
