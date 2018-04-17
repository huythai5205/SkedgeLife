import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

//components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CreateUserForm from './components/createUserForm/createUserForm';
import LoginForm from './components/loginForm/loginForm';
//pages
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/profile/profile';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
          <LoginForm />
          <CreateUserForm />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
