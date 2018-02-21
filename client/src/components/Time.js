import React, { Component } from 'react';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: null
    }
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        currentTime : new Date().toLocaleString()
      })
    },1000)
  }

  render() {
    return (
      <span className="overlay-date">{ this.state.currentTime }</span>
    );
  }
}

export default Time;
