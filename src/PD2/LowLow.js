import React from "react";

class LowLow extends React.Component {
    render() {
        return (
            <div className={'low-low'}>
                <p>Imię: {this.props.display2.name}, Nazwisko: {this.props.display2.surname}</p>
            </div>
        );
    }
}

export default LowLow;