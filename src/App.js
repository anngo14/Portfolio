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

function App(){
  return(
    <div className="App">
      <Router>
        <Nav />
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

export default App;
