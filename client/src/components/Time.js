import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      currentTime: null

    }
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        date: moment().format('LL'),
        currentTime: moment().format('LTS')
      })
    },1000)
  }

  render() {
    return (
      <div>
        <li className="overlay-date list-group-item">{ this.state.date }</li>
        <li className="overlay-time list-group-item">{ this.state.currentTime }</li>
      </div>
    );
  }
}

export default Time;
