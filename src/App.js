import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div>
        <header className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
          <h1 className="navbar-brand">Balls to the Wall</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
