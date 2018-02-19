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

  renderLeds() {
    return (
      <ul className="list-group">
        {this.state.ledList.map((led) =>
          <li key={led._id} className="list-group-item">
            <h3 className="led-color-name">{ led.color }</h3>
            <ul className="led-info list-inline">
              <li className="list-inline-item">Position: { led.index }</li>
              <li className="list-inline-item">On: { led.isOn.toString() }</li>
            </ul>
          </li>
        )}
      </ul>
    )
  }
  
  render() {
    return (
      <div>
        {this.renderLeds()}
      </div>
    )
  }
}

export default Leds;
