import React, { Component } from "react";
import "./chatScreen.css";
import { Avatar } from "@material-ui/core";

class ChatScreen extends Component {
  state = {
    messages: [
      {
        name: "Ellan",
        image: "..",
        message: "Whats up"
      },
      {
        name: "Ellan",
        image:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.unitedagents.co.uk%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2Fellan-rankin.jpg&imgrefurl=https%3A%2F%2Fwww.unitedagents.co.uk%2Fellan-rankin&tbnid=iuXgLNnkwvBw3M&vet=12ahUKEwjEnfXAq-LtAhUDVFMKHUyFAZMQMygFegUIARCiAQ..i&docid=e5MKM5I-7XgP5M&w=1571&h=2000&q=ellan&ved=2ahUKEwjEnfXAq-LtAhUDVFMKHUyFAZMQMygFegUIARCiAQ",
        message: "How are you doing"
      },
      {
        message: "When are you coming back?"
      }
    ],
    newMessage: ""
  };

  //Functions
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      messages: [...this.state.messages, { message: this.state.newMessage }],
      newMessage: ""
    });
  };
  render() {
    const { inputs } = this.state;
    return (
      <div className="chatScreen">
        <p className="chatScreen__timeStamp">
          You Macheted with Ellen on 10/12/20
        </p>
        {this.state.messages.map(message =>
          message.name ? (
            <div className="chatScreen__messages" key={message.message}>
              <Avatar
                className="chatScreen_avatar"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__messages" key={message.message}>
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
        )}
        <form className="chatScreen__input" onSubmit={this.handleSubmit}>
          <input
            placeholder="Type a message"
            className="chatScreen_inputField"
            onChange={this.onChange}
            value={this.state.newMessage}
            name="newMessage"
          ></input>
          <button className="chatScreeen__inputButton">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatScreen;
