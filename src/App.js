import './App.css';
import Introduction from './components/Introduction';
import Nav from './components/Nav'
import About from './components/About'
import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact'

function App(){
  return(
    <div className="App">
      <Nav />
      <Introduction name="Andrew Ngo"/>
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
