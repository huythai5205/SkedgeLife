import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

//components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CreateUserForm from './components/createUserForm/createUserForm';
//pages
import Home from './pages/home/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Home} />
          <CreateUserForm />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
