import React from "react";
import { CirclePicker } from 'react-color';
import { Dropdown } from 'semantic-ui-react'
import employees from '../api/employees';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

class MessageForm extends React.Component {
  state = { to: "", from: "", message: "", color: "", error: { to: false, from: false, message: false } };

  onFormSubmit = (event) => {
    event.preventDefault();
    var msg = {
      to: this.state.to,
      from: this.state.from,
      message: this.state.message,
      color: this.state.color,
    };

    if (this.state.to.trim().length === 0) {
      this.setState({ error: { to: true } });

    } else if (this.state.message.trim().length === 0) {
      this.setState({ error: { message: true } });

    } else {
      this.props.onSubmit(msg);
      this.setState({ to: "", from: "", message: "", color: '', error: { to: false } });

    }
  };

  handleColor = (color, event) => {

    this.setState({ color: color.hex })
  }
  render() {
    const options = employees;
    const style = { backgroundColor: 'blue!important' };
    return (
      <div className="ui segment form-container" style={style}>
        {/* <form className="ui form" onSubmit={this.onFormSubmit}> */}
        <Form onSubmit={this.onFormSubmit}>

          <div className="two fields">
            <div className="field">
              <label className="flex-spaceb">Message To<div className="validation-d">{this.state.error.to && !this.state.to ? <font color="red"> Select someone you would like to appreciate  </font> : <></>}</div></label>
              <Dropdown
                error={this.state.error.to && !this.state.to}
                placeholder='To' name="to" clearable search selection options={options} value={this.state.to} onChange={(e, data) => this.setState({ to: data.value })} />
              <div className="validation-m">{this.state.error.to && !this.state.to ? <font color="red"> Select someone you would like to appreciate  </font> : <></>}</div>
            </div>
            <div className="field">
              <label>Message From</label>
              <Form.Input
                type="text"
                placeholder="From"
                value={this.state.from}
                onChange={(e) => {
                  this.setState({ from: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="field">
            <label className="flex-spaceb">Message <div className="validation-d">{this.state.error.message && !this.state.message ? <font color="red"> and put those words of appreciation 🤗</font> : <></>}</div></label>
            <Form.Field
              error={this.state.error.message && !this.state.message}
            >

              <TextArea
                type="text"
                placeholder="Write a thank you message,  Appreciation can change a day, even change a life. Your willingness to put into words is all that is necessary.
              ."
                value={this.state.message}
                onChange={(e) => {
                  this.setState({ message: e.target.value });
                }}
              />
              <div className="validation-m">{this.state.error.message && !this.state.message ? <font color="red"> and put those words of appreciation 🤗</font> : <></>}</div>
            </Form.Field>
          </div>
          <div className="two fields">
            <div className="field">
              <CirclePicker required colors={['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']} width="100" onChange={(color, event) => this.handleColor(color, event)} />
            </div>
            <div className="field">
              <button className="ui button right floated red" type="submit">Post Message</button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default MessageForm;
