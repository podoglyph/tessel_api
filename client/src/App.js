import React, { Component } from 'react';
import './App.css';
import Leds from './components/Leds';
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Tessel Interface</h1>
        </header>
        <div className="row">
          <div className="col-md-4">
            <Leds />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
