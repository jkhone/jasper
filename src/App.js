import React from 'react';
import './App.css';
import './Animation.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/jasper' component={Main} />
        <Route path='/jasper/about' component={About} />
        <Route path='/jasper/skills' component={Skills} />
        <Route path='/jasper/projects' component={Projects} />
        <Route path='/jasper/contact' component={Contact} />
      </Router>
    </div>
  );
}

export default App;
