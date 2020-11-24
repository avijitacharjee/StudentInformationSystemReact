import './App.css';
import React from 'react';
import Login from './components/Login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Post from './components/post/Post';
import Footer from './components/Footer/Footer';
import AdminIndex from './components/panels/admin/index/AdminIndex';
import AddTeacher from './components/panels/admin/addTeacher/AddTeacher';
class App extends React.Component {
  render() {
    return (
      <Router className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/post' component={Post} />
          <Route path='/admin/index' component={AdminIndex} />
          <Route path='/admin/add-teacher' component={AddTeacher}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
