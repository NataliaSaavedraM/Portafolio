import React, { Component } from "react";
import "./index.css";
import {BrowserRouter as Router,
  Route} from 'react-router-dom';
import Home from './views/home'
import Aboutme from './views/aboutme'
import Projects from './views/projects'
import Skills from './views/skills'
import Contact from './views/contact'

class App extends Component {
  render() {
    return (
      <Router>
      <Route exact path="/Home" component={ Home } />
        <Route path="/Aboutme" component={ Aboutme } />
        <Route path="/Projects" component={ Projects } />
        <Route path="/Skills" component={ Skills } />
        <Route path="/Contact" component={ Contact }/>
    </Router>
    );
  }
}

export default App;





/* import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1 className='text-info'>Hola Naty Vas Bien</h1>
     <p className='text-success'>Vamos viendo</p>
      </header>
    </div>
  );
}

export default App; */

















