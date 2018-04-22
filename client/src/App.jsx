import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//components

import Header from "./components/header/header";
import FlashMessageList from "./components/flashMessageList/flashMessageList";
import Footer from "./components/footer/footer";
import CreateUserPage from "./components/createUserForm/createUserPage";
import CreateClassForm from "./components/createClassForm/createClassForm";
import LoginForm from "./components/loginForm/loginForm";
//pages
import HomePage from "./pages/homePage/homePage";
import DashboardPage from "./pages/dashboardPage/dashboardPage";
import ProfilePage from "./pages/profilePage/profilePage";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <FlashMessageList />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboardPage" component={DashboardPage} />
            <Route exact path="/profilePage" component={ProfilePage} />
          </Switch>
          <LoginForm />
          <CreateUserPage />
          <CreateClassForm />
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
