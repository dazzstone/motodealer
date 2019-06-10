import React from 'react';
import './App.css';
import Home from './components/HomePage';
import Moto from './components/Motos';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Link to="/">
          <div className="fixblock">
          <img src="https://images.ua.prom.st/111794951_w640_h640_mopedy-honda.jpg" className="fixedImg"></img>
          </div>
        </Link>
      <Route exact path="/" component={Home} />
      <Route path='/:slug' component={Moto} />
    </Router>
    </>
  );
}

export default App;