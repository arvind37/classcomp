import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({ count: count + 3 });
  };

  handleDecrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 2 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;