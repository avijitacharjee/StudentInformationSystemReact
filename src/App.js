import './App.css';
import React from 'react';
import Login from './components/Login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
class App extends React.Component {
  render() {
    return (
      <Router className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Login} />
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
