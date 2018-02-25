import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LedList from './components/LedList';
import Camera from './components/Camera';

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
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-3">
            <LedList leds={this.state.leds} />
          </div>
          <Camera />
        </div>
      </div>
    );
  }
}

export default App;
