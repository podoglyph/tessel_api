import React, { Component } from 'react';

class LedListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: this.props.led.isOn
    }
  }

  ledStatus() {
    if (this.state.isOn === true) {
      return "ON";
    } else {
      return "OFF";
    }
  }

  toggleLed(id) {
    const data = {
      isOn: this.state.isOn
    }
    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    }
    fetch('/leds/' + id, options)
      .then(res => {
        if (res.ok) {
          console.log(res)
          return res.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState(prevState => ({
        isOn: !prevState.isOn
      })))
      .catch(err => console.log(err));

  }

  render() {
    const color = this.props.led.color;
    const id = this.props.led._id;
    return (
      <li className="list-group-item led-list d-flex justify-content-between align-items-center">
        { color }
        <button onClick={this.toggleLed.bind(this, id)} className="badge badge-primary badge-pill led-item">{ this.ledStatus() }</button>
      </li>
    )
  }

}

export default LedListItem;
