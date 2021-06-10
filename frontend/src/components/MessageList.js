import "./MessageList.css";
import React from "react";
import MessageCard from "./MessageCard";

const MessageList = (props) => {
  const messages = props.messages.map((message, i ) => {
    return <MessageCard key={message.id} message={message} />;
  });

  return <div className="message-list">{messages}</div>;
};

export default MessageList;
