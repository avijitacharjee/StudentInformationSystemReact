import './App.css';
import React from 'react';
import Login from './components/Login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Post from './components/post/Post';
import Footer from './components/Footer/Footer';
class App extends React.Component {
  render() {
    return (
      <Router className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/post' component={Post} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
