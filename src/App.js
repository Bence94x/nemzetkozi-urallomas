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
          <Route path="/nemzetkozi-urallomas/" exact component={Home} />
          <Route path="/nemzetkozi-urallomas/Map" component={Map} />
          <Route path="/nemzetkozi-urallomas/Name" component={Name} />
        </Switch>

        <Footer />
      </Router>

      
    </div>
  );
}

export default App;
