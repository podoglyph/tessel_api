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

  render() {
    const color = this.props.led.color;
    return (
      <li className="list-group-item">
        <div className="led-list">
          <div className="led-left">
            <div className="led-color">
              { color }
            </div>
          </div>
          <div className="led-right">
            <div className="led-status">
              { this.ledStatus() }
            </div>
          </div>
        </div>
      </li>
    )
  }

}

export default LedListItem;
