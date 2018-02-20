import React, { Component } from 'react';
import './App.css';
import LedList from './components/LedList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leds: []
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ leds: res }))
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
      <div className="row-fluid">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Tessel Interface</h1>
        </header>
        <div className="row">
          <LedList leds={this.state.leds} />
        </div>
      </div>
    );
  }
}

export default App;
