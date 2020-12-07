import './App.css';
import Introduction from './components/Introduction';
import Nav from './components/Nav'
import About from './components/About'
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Skills from './components/Skills';

function App(){
  return(
    <div className="App">
      <Nav />
      <Introduction name="Andrew Ngo"/>
      <About />
      <Timeline />
      <Skills />
      <Footer />
    </div>
  )
}

export default App;
