import React, { Component } from 'react';
import Player from './Player';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: {
        points: 0,
        rebounds: 0
      },
      player2: {
        points: 0,
        rebounds: 0
      },
      player3: {
        points: 0,
        rebounds: 0
      },
      player4: {
        points: 0,
        rebounds: 0
      },
      player5: {
        points: 0,
        rebounds: 0
      }
    }
  }

  onPlayerStatChange(player, stats) {
    let newState = {};
    newState[player] = stats;
    this.setState(newState, () => {
      let points = this.state.player1.points +
        this.state.player2.points +
        this.state.player3.points +
        this.state.player4.points +
        this.state.player5.points;
      
      this.props.onScoreChange(points);
    });
  }

  render() {
    return (
      <div style={{'marginBottom': '10px'}}>
        <Player onStatChange={(stat) => this.onPlayerStatChange('player1', stat)} stats={this.state.player1}/>
        <Player onStatChange={(stat) => this.onPlayerStatChange('player2', stat)} stats={this.state.player2}/>
        <Player onStatChange={(stat) => this.onPlayerStatChange('player3', stat)} stats={this.state.player3}/>
        <Player onStatChange={(stat) => this.onPlayerStatChange('player4', stat)} stats={this.state.player4}/>
        <Player onStatChange={(stat) => this.onPlayerStatChange('player5', stat)} stats={this.state.player5}/>
      </div>
    );
  }
}

export default Team;
