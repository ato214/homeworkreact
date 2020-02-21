import React from "react";

export default class LifecycleTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: null,
      info: ""
    };
  }

  handleClick = () => {
    let value = this.state.counter + 1;
    this.setState({ counter: value });
    if (this.state.counter > 9) {
      this.setState({ info: "Dziękuję za cierpliwość. Ilość kliknięć: " });
    }
  };

  shouldComponentUpdate = () => {
    return this.state.counter > 9;
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Kliknij!</button>
        <h2>
          {this.state.info}
          {this.state.counter}
        </h2>
      </div>
    );
  }
}
