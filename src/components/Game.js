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
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <div className="container-fluid">
              <div className="row">
                <h3 className="col text-center">{this.state.score1}</h3>
                <div className="col-3 text-center align-self-center">Pts</div>
                <div className="col-3 text-center align-self-center">Reb</div>
              </div>
              <Team onScoreChange={(score) => this.setScore('score1', score)} />
            </div>
          </div>
          <div className="col-sm">
            <div className="container-fluid">
              <div className="row">
                <h3 className="col text-center">{this.state.score2}</h3>
                <div className="col-3 text-center align-self-center">Pts</div>
                <div className="col-3 text-center align-self-center">Reb</div>
              </div>
              <Team onScoreChange={(score) => this.setScore('score2', score)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
