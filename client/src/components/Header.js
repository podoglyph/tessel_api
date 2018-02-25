import React, { Component } from 'react';

class Header extends Component {
  state = {
    currentUser: "Plato"
  }

  render() {
    return (
      <header className="row">
        <div className="header-left col-md-2">
          <h1 className="App-title">Compound[Cam]</h1>
          <p className="Location">Location: Home</p>
        </div>
        <nav className="nav justify-content-end col-md-10">
          <a className="nav-link" href="#">Welcome, Padraic</a>
          <a className="nav-link" href="#">Devices</a>
        </nav>
      </header>
    )
  }
}

export default Header;
