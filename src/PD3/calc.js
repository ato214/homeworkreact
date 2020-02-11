import React from "react";

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    showPrompt = () => {
        var value = prompt("Podaj liczbę:");
        let tempVal = this.state.number + Number(value);
        this.setState({number: tempVal})
    }
    render() {
        return (
            <div>
                <button onClick={this.showPrompt}>Wprowadź liczbę</button>
                <p>{this.state.number}</p>
            </div>
        );
    }
}

export default Calc;