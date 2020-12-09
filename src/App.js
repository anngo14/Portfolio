import './App.css';
import Introduction from './components/Introduction';
import Nav from './components/Nav'
import About from './components/About'
import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <div className="App">
      <Nav />
      <Introduction header="Andrew Ngo" subheader="Software Engineer" links/>
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
