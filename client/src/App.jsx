import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//components

import Header from "./components/header/header";
import FlashMessageList from "./components/flashMessageList/flashMessageList";
import Footer from "./components/footer/footer";
import SignUpUserForm from "./components/signUpUserForm/signUpUserForm";
import CreateClassForm from "./components/createClassForm/createClassForm";
import LoginForm from "./components/loginForm/loginForm";
//pages
import HomePage from "./pages/homePage/homePage";
import DashboardPage from "./pages/dashboardPage/dashboardPage";
import ProfilePage from "./pages/profilePage/profilePage";
import ClassInfoPage from "./pages/classInfoPage/classInfoPage";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <FlashMessageList />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signUp" component={SignUpUserForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/dashboardPage" component={DashboardPage} />
            <Route exact path="/profilePage" component={ProfilePage} />
            <Route exact path="/createClass" component={CreateClassForm} />
            <Route exact path="/classInfoPage" component={ClassInfoPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
