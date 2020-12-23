import React from "react";
import Chat from "./Chat.jsx";
import "./chats.css";

export default function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Yadhap Dhakal"
        message="hello man"
        timeStamp="40 secs ago"
        profilePic="data:image/jpeg;base64,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"
      />
      <Chat
        name="Mark Dahal"
        message="hello man"
        timeStamp="40 secs ago"
        profilePic="..."
      />
    </div>
  );
}