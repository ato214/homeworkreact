import React from "react";

class PD1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            gender: "",
            age: null,
        };
        this.tempState = {
            name: "",
            surname: "",
            gender: "",
            age: null,
        };
    }

    changeState = () => {
        this.setState({
            name: this.tempState.name,
            surname: this.tempState.surname,
            gender: this.tempState.gender,
            age: this.tempState.age
        });

    };

    myChangeHandler = (event) => {
        //this.setState({[event.target.name]: event.target.value});
        this.tempState[event.target.name] = event.target.value
    };

    validate = () => {
        let zxc ="";
        let upperName = this.tempState.name.charAt(0).toUpperCase()+ this.tempState.name.slice(1);
        let upperSurname = this.tempState.surname.charAt(0).toUpperCase()+ this.tempState.surname.slice(1);
        if (this.tempState.name !== upperName) {
            zxc += "Imię piszemy wielką literą!";
        }
        if (this.tempState.surname !== upperSurname) {
            zxc += " Nazwisko piszemy wielką literą!";
        }
        if (this.tempState.name.length < 2) {
            zxc += this.tempState.name + " to nie jest Twoje imię";
        }
        if (zxc !== "") {
            alert(zxc);
        }
    };

    submit = (e) => {
        e.preventDefault();
        this.validate();
        this.changeState();
    };

    render () {

        return (
            <div>
        <form onSubmit={this.submit}>
            <input
                type="text" name="name" placeholder="Imię:" onChange={this.myChangeHandler}
            /><br/><br/>
            <input
                type="text" name="surname" placeholder="Nazwisko:" onChange={this.myChangeHandler}
            /><br/>
            <p><input type="radio" name="gender" value="Mężczyza" onChange={this.myChangeHandler}/>M</p>
            <p><input type="radio" name="gender" value="Kobieta" onChange={this.myChangeHandler}/>K</p>
            <input
                type="number" name="age" placeholder="Wiek:" onChange={this.myChangeHandler}
            /><br/><br/>
            <input type="submit"/>
        </form>
                <h1>Imię: {this.state.name}</h1>
                <h1>Nazwisko: {this.state.surname}</h1>
                <h1>Płeć: {this.state.gender}</h1>
                <h1>Wiek: {this.state.age}</h1>
            </div>
        )
    }
}

export default PD1;