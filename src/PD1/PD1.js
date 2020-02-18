import React from "react";

export default class PD1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      usersurname: "",
      sex: "",
      age: "",
      errors: {
        username: false,
        usersurname: false,
        sex: false,
        age: false
      }
    };
    this.messages = {
      username_incorrect: "Imię piszemy wielką literą",
      lenght_incorrect:
        "Imię i nazwisko muszą zawierać co najmniej dwie litery",
      usersurname_incorrect: "Nazwisko piszemy wielką literą",
      sex_incorrect: "Podaj płeć",
      age_incorrect: "Wiek musi być cyfrą"
    };
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();
    this.setState({
      errors: {
        username: !validation.username,
        usersurname: !validation.usersurname,
        age: !validation.age,
        sex: !validation.sex,
        lenght: !validation.lenght
      }
    });
  };

  formValidation = () => {
    let username = false;
    let usersurname = false;
    let age = false;
    let sex = false;
    let lenght = false;
    let correct = false;
    let firstLetterName =
      this.state.username.charAt(0).toUpperCase() +
      this.state.username.slice(1);
    let firstLetterSurname =
      this.state.usersurname.charAt(0).toUpperCase() +
      this.state.usersurname.slice(1);
    let ageNumber = this.state.age;

    if (this.state.username.length > 1 && this.state.usersurname.length > 1) {
      lenght = true;
    }
    if (this.state.username === firstLetterName) {
      username = true;
    }
    if (this.state.usersurname === firstLetterSurname) {
      usersurname = true;
    }
    if (this.state.age !== "" && Number(ageNumber)) {
      age = true;
    }
    if (this.state.sex !== "") {
      sex = true;
    }
    if (username && usersurname && age && lenght && sex) {
      correct = true;
    }
    return {
      correct,
      username,
      usersurname,
      lenght,
      age,
      sex
    };
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Wpisz swoje imię:
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="Twoje imię"
              onChange={this.handleChange}
            />
            <br />
            {this.state.errors.username && (
              <span>{this.messages.username_incorrect}</span>
            )}
          </p>
          <br />
          <p>
            Wpisz swoje nazwisko:
            <input
              type="text"
              name="usersurname"
              value={this.state.usersurname}
              placeholder="Twoje nazwisko"
              onChange={this.handleChange}
            />
            <br />
            {this.state.errors.usersurname && (
              <span>{this.messages.usersurname_incorrect}</span>
            )}
            <br />
            {this.state.errors.lenght && (
              <span>{this.messages.lenght_incorrect}</span>
            )}
          </p>
          <br />
          <p>Wybierz płeć:</p>
          <select name="sex" onChange={this.handleChange}>
            <option>Wybierz</option>
            <option>kobieta</option>
            <option>mężczyzna</option>
          </select>
          <br />
          {this.state.errors.sex && <span>{this.messages.sex_incorrect}</span>}

          <p>
            Podaj swój wiek:
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <br />
            {this.state.errors.age && (
              <span>{this.messages.age_incorrect}</span>
            )}
          </p>

          <br />
          <br />
          <input type="submit" value="Zapisz" />
        </form>
        <br />
        <p>Podałeś: {this.state.name}</p>
        <ul>
          <li>Imię: {this.state.username}</li>
          <li>Nazwisko: {this.state.usersurname}</li>
          <li>Płeć: {this.state.sex}</li>
          <li>Wiek: {this.state.age}</li>
        </ul>
      </div>
    );
  }
}
