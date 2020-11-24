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
import TeacherCrud from './components/panels/admin/teacherCrud/TeacherCrud';
import TeacherUpdate from './components/panels/admin/teacherCrud/TeacherUpdate';
import TeacherCreatePost from './components/panels/teacher/CreatePost/TeacherCreatePost'
//Students
import StudentViewAllPost from './components/panels/student/ViewPost/StudentVeiwAllPost'
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
          <Route path='/admin/teacher/add' component={AddTeacher} />
          <Route path='/admin/teachers' component={TeacherCrud} />
          <Route exact path='/admin/teacher/update/:id' component={TeacherUpdate} />
          <Route path='/teacher/post' component={TeacherCreatePost} />
          <Route path='/student/posts' component={StudentViewAllPost}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
