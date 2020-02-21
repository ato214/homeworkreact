import React from "react";

export default class Calc extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.nextNumber}>Wprowadź liczbę</button>
        <br />
      </div>
    );
  }
}
