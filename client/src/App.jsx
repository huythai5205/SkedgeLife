import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//components
<<<<<<< HEAD
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import CreateClassForm from "./components/createClassForm/createClassForm";

//pages
import Home from "./pages/home/home";
=======
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CreateUserForm from './components/createUserForm/createUserForm';
import LoginForm from './components/loginForm/loginForm';
//pages
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/profile/profile';

>>>>>>> 0dc2b4d94e784230a74f793412d6be1161ff1f31

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
<<<<<<< HEAD
          <Route exact path="/" component={Home} />
=======
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
          <LoginForm />
          <CreateUserForm />
>>>>>>> 0dc2b4d94e784230a74f793412d6be1161ff1f31
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
