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

  toggleLed() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }

  render() {
    const color = this.props.led.color;
    return (
      <li className="list-group-item led-list d-flex justify-content-between align-items-center">
        { color }
        <button onClick={this.toggleLed.bind(this)} className="badge badge-primary badge-pill led-item">{ this.ledStatus() }</button>
      </li>
    )
  }

}

export default LedListItem;
