import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App-Constructor");
    //Good place to set state from props
  }
  componentDidMount() {
    //Good place to make API calls and set state
    console.log("App - Mount");
  }
  state = {};

  render() {
    //Render jsx here
    return (
      <div className="App container">
        <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chats">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/profile">
              <Header />
              <Profile />
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

// Headerstinder
// tinder cards
// buttons below cards
//Chat screen
//Individual chat screen
