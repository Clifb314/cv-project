import { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      age: 0,
      address: "",
      city: "",
      zip: 0,
      email: "",
      pnum: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const field = e.target.name;
    const data = e.target.value;

    this.setState({
      [field]: data,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const fieldset = e.target.lastChild;
    fieldset.disabled = true;
    const form = new FormData(e.target);
    const formJson = Object.fromEntries(form.entries());
    console.log(this.state);
    console.log(formJson);
  }

  render() {
    const { fname, lname, age, address, city, zip, email, pnum } = this.state;
    return (
      <form id="basic" onSubmit={this.handleSubmit}>
        <p>First, please enter some personal information</p>
        <fieldset form="basic">
          <label htmlFor="fname">First Name: </label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={this.handleChange}
          />
          <label htmlFor="lnam">Last Name: </label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={this.handleChange}
          />
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={this.handleChange}
          />
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={this.handleChange}
          />
          <label htmlFor="zip">Zip-code: </label>
          <input
            type="number"
            name="zip"
            value={zip}
            onChange={this.handleChange}
          />
          <label htmlFor="email">e-mail address: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="pnum">Phone Number: </label>
          <input
            type="number"
            name="pnum"
            value={pnum}
            onChange={this.handleChange}
          />
          <button type="submit" form="basic">
            Submit Section
          </button>
        </fieldset>
      </form>
    );
  }
}

export default Personal;
