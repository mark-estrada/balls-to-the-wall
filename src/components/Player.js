import React, { Component } from 'react';

class Player extends Component {
  addPoints(points) {
    let newPoints = this.props.stats.points + points;
    if (newPoints < 0) {
      newPoints = 0;
    }

    this.props.onStatChange({
      points: newPoints,
      rebounds: this.props.stats.rebounds
    });
  }

  addRebound(rebound) {
    let newRebounds = this.props.stats.rebounds + rebound;
    if (newRebounds < 0) {
      newRebounds = 0;
    }

    this.props.onStatChange({
      points: this.props.stats.points,
      rebounds: newRebounds
    });
  }

  render() {
    return (
      <div>
        <input />
        <button onClick={() => this.addPoints(2)}>+2pts</button>
        <button onClick={() => this.addPoints(3)}>+3pts</button>
        <button onClick={() => this.addPoints(-1)}>-1pt</button>
        <span>{this.props.stats.points} pts</span>
        <button onClick={() => this.addRebound(1)}>+1reb</button>
        <button onClick={() => this.addRebound(-1)}>-1reb</button>
        <span>{this.props.stats.rebounds} reb</span>
      </div>
    );
  }
}

export default Player;
