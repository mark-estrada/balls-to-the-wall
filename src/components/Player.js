import React, { Component } from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '80px'
  }
};

Modal.setAppElement('#root');

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Name',
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  onNameChange(event) {
    this.setState({name: event.target.value});
  }

  addPoints(points) {
    let newPoints = this.props.stats.points + points;
    if (newPoints < 0) {
      newPoints = 0;
    }

    this.props.onStatChange({
      points: newPoints,
      rebounds: this.props.stats.rebounds
    });

    if (points > 0) {
      this.closeModal();
    }
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

    if (rebound > 0) {
      this.closeModal();
    }
  }

  render() {
    return (
      <div className="row" style={{'marginBottom': '2px'}}>
        <button className="col btn btn-primary btn-lg" onClick={this.openModal}>{this.state.name}</button>
        <div className="col-3 text-center align-self-center">{this.props.stats.points}</div>
        <div className="col-3 text-center align-self-center">{this.props.stats.rebounds}</div>
        <Modal style={modalStyles} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <div className="form-group">
            <label classfor="name">Name</label>
            <input className="form-control-lg" id="name" value={this.state.name} onChange={this.onNameChange}/>
          </div>
          <div className="form-group">
            <div>Points: {this.props.stats.points}</div>
            <button className="btn btn-primary btn-lg" style={{'marginRight': '2px'}} onClick={() => this.addPoints(2)}>+2</button>
            <button className="btn btn-primary btn-lg" style={{'marginRight': '2px'}} onClick={() => this.addPoints(3)}>+3</button>
            <button className="btn btn-danger btn-lg" onClick={() => this.addPoints(-1)}>-1</button>
          </div>
          <div className="form-group">
            <div>Rebounds: {this.props.stats.rebounds}</div>
            <button className="btn btn-primary btn-lg" style={{'marginRight': '2px'}} onClick={() => this.addRebound(1)}>+1</button>
            <button className="btn btn-danger btn-lg" onClick={() => this.addRebound(-1)}>-1</button>
          </div>
          <div className="form-group">
            <button className="btn btn-secondary btn-lg" onClick={this.closeModal}>Close</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Player;
