import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from "./Home";
import Map from './Map';
import Name from './Name';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Map" component={Map} />
          <Route path="/Name" component={Name} />
        </Switch>

        <Footer />
      </Router>

      
    </div>
  );
}

export default App;
