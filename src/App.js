import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Projects from './component/Projects';
import DropdownMenu from './component/DropdownMenu';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("Toggle")
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact="true" component="">
            <Header toggle={toggle} />
            <DropdownMenu isOpen={isOpen} toggle={toggle} />
            <Home />
            <Footer />
          </Route>

          <Route path="/about" exact component="About">
            <Header toggle={toggle} />
            <DropdownMenu isOpen={isOpen} toggle={toggle} />
            <About />
            <Footer />
          </Route>

          <Route path="/projects" exact component="About">
            <Header toggle={toggle} />
            <DropdownMenu isOpen={isOpen} toggle={toggle} />
            <Projects />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
