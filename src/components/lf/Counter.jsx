import React, { Component } from 'react';

class Counter extends Component {
  state = {
    score: 0
  };
  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score < 2 ? prevState.score + 1 : (prevState.score = 2)
    }));
  };

  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score > -2 ? prevState.score - 1 : (prevState.score = -2)
    }));
  };
  render() {
    return (
      <div className='counter'>
        <button
          className='counter-action decrement'
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className='counter-score'>{this.state.score}</span>
        <button
          className='counter-action increment'
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
