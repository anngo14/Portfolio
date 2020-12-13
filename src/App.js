import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vertical-timeline-component/style.min.css';

function App(){
  return(
    <div className="App">
      <Router>
        <Nav />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='*'component={Error}/>
          </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
