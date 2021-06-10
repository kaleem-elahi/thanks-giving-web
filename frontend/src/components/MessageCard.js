import React from "react";

class MessageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.messageRef = React.createRef();
  }

  componentDidMount() {
    this.setSpans();
  }

  setSpans = () => {
    const height = this.messageRef.current.clientHeight + 120;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { from, to, message, color } = this.props.message;
    console.log(this.props.message)
    return (
      <div
        className="ui card swing-in-top-fwd"
        style={{ gridRowEnd: `span ${this.state.spans}`, background: color }}
      >
        {to ? 
        <div className="to" >  to <strong ><i >{to}</i></strong>,</div>
        : ""}
        <div className=" message" ref={this.messageRef}>
          {message}
        </div>
        {
          from ? 
          <div className="from"> - <i>{from}</i></div>
            : ""
        }
      </div>
    );
  }
}

export default MessageCard;
