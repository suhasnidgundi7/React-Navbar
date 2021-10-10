import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Teams from './pages/Teams'
import Messages from './pages/Messages';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/teams' component={Teams} />
          <Route path='/messages' component={Messages} />        
          <Route path='/support' component={Support} />        
        </Switch>
      </Router>
    </>
  );
}

export default App;