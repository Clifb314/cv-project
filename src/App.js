import "./App.css";
import { Component } from "react";
import Personal from "./components/components";
import Education from "./components/education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        employ: "",
        title: "",
        city: "",
        start: 0,
        end: 0,
        pay: 0,
        reason: "",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //seems like it's overwriting the entire contents of basic with one value
  handleChange(e) {
    const form = e.target.form.id;
    const field = e.target.name;
    const data = e.target.value;

    this.setState({
      [form]: {
        [field]: data
      },
    });
    console.log(data)
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(this.state);

    const fieldset = e.target.lastChild;
    console.log(fieldset)
    fieldset.disabled = true;

    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries())
    console.log(formData)
    console.log(formJson)
  }

  render() {
    const { experience } = this.state;

    return (
      <div id="CV">
        <Personal />

        <Education />

        <form id="experience" onSubmit={this.handleSubmit}>
          <p>Please enter information about your most recent employer</p>
          <fieldset form="experience">
            <label htmlFor="employ">Employer Name:</label>
            <input
              type="text"
              name="employ"
              value={experience.employ}
              onChange={this.handleChange}
            />
            <label htmlFor="title">Your Title:</label>
            <input
              type="text"
              name="title"
              value={experience.title}
              onChange={this.handleChange}
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              value={experience.city}
              onChange={this.handleChange}
            />
            <label htmlFor="start">Start Date:</label>
            <input
              type="date"
              name="start"
              value={experience.start}
              onChange={this.handleChange}
            />
            <label htmlFor="end">End Date:</label>
            <input
              type="date"
              name="end"
              value={experience.end}
              onChange={this.handleChange}
            />
            <label htmlFor="pay">Salary (hourly):</label>
            <input
              type="number"
              name="pay"
              min="0"
              max="1000"
              value={experience.pay}
              onChange={this.handleChange}
            />
            <label htmlFor="reason">Reason For Leaving:</label>
            <textarea
              name="reason"
              rows="2"
              cols="40"
              form="experience"
              maxLength="150"
              value={experience.reason}
              onChange={this.handleChange}
            />
            <button type="submit" form="experience">
              Submit Section
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
