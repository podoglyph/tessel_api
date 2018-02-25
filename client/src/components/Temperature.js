import React, { Component } from 'react';
import axios from 'axios';

const API = 'https://stark-tesselator.local:8888/temperature';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTempF: null
    }
  }

  componentDidMount() {
    setInterval( () => {
      axios.get(API)
        .then(({ data }) => {
          this.setState({
            currentTempF: data.degreesF.toFixed(1)
          });
        })
        .catch((err)=> {})
    },3000)
  }

  render() {
    return (
      <div>
        <li className="overlay-temp-F list-group-item">{ this.state.currentTempF } &#8457;</li>
      </div>

    );
  }
}

export default Temperature;
