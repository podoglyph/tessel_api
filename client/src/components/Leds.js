import React, { Component } from 'react';

class Leds extends Component {
  state = {
    ledList: []
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ ledList: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/leds');
    const leds = await response.json();

    if (response.status !== 200) throw Error(leds.message);

    return leds;
  };

  render() {
    return (
      <ul className="list-group">
        {this.state.ledList.map((led) =>
          <li key={led._id} className="list-group-item">
            <h3 className="led-color-name">{ led.color.toUpperCase() }</h3>
            <div>
              <span>{ led.index }</span>
              <span>{ led.isOn.toString() }</span>
            </div>
          </li>
        )}
      </ul>
    )
  }
}

export default Leds;
