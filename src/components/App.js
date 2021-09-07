
import React from 'react'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import '../styles/App.css'
import Home from './Home';
import Nav from './Nav';
import Search from './Search';

function App() {
  return (
    <Router>  
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  exact path="/Search" component={Search}  />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
