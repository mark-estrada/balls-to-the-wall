import React, { Component } from 'react';
import Team from './Team';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score1: 0,
      score2: 0
    };
  }

  setScore(team, score) {
    let newState = {};
    newState[team] = score;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div>
          <div>{this.state.score1}</div>
          <Team onScoreChange={(score) => this.setScore('score1', score)} />
        </div>
        <div>
          <div>{this.state.score2}</div>
          <Team onScoreChange={(score) => this.setScore('score2', score)} />
        </div>
      </div>
    );
  }
}

export default Game;
