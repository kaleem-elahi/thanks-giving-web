import React from "react";
// import unsplash from "../api/unsplash";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import './../css/styles.css'; 
import api from '../api/messages-service';
import logo from '../assets/yapsody.png';

class App extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.intervalId = setInterval(() => this.getMessageList(), 10000);
    this.getMessageList(); // also load one immediately

    // this.getMessageList();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
}

  getMessageList = () => {
    api.get('https://67102acba85f4164ef2d418e.mockapi.io/v1/thanksgiving/messages/messages',{}).then(data => {

      const response = data.data.map(message => ({
        id: message.id,
        message: message.body,
        from: message.from,
        color: message.colour,
        to: message.to,
      }));
      
      this.setState({ messages: response });
    })
  }


  onSubmit =  (message) => {

    const body = {
      from:message.from || "Anonymous",
      to: message.to,
      body: message.message,
      colour: message.color || '#fff'
    }

    api.post('https://67102acba85f4164ef2d418e.mockapi.io/v1/thanksgiving/messages/messages',body).then(data => {


      if (data.status !== 400) {
        this.getMessageList();
      } 
    })
    
  };

  render() {
    console.log(this.state)
    return (
      <div className="ui container" >
        <br />
        <center>
          <img className="grayscale" src={logo} />  
         <div className="header-title">🤩 Happy Thanksgiving 🤩</div>
        </center>
        <MessageForm onSubmit={this.onSubmit} />
        {this.state.messages.length ?
        <MessageList messages={this.state.messages} />
          : 
        <center>Thank someone 💌</center>}
        <br />
        <center>
          <p>Copyright © 2020 Yapsody India Pvt Ltd</p>
        </center>
        <br />
      </div>
    );
  }
}

export default App;
