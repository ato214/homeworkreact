import React from "react";
import Calc from "./calc.js";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0
    };
  }

  handleNumber = () => {
    let newNumber = prompt("Wprowadź liczbę:");
    let newSum = this.state.sum + Number(newNumber);
    this.setState({ sum: newSum });
  };

  finishSum = () => {
    this.setState({ sum: 0 });
  };

  render() {
    return (
      <div>
        <Calc nextNumber={this.handleNumber} />
        <p>Suma: {this.state.sum}</p>
        <button onClick={this.finishSum}>Wyczyść</button>
      </div>
    );
  }
}
