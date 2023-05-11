import { Component } from "react";
import Jobs from "./jobs";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forms: 1,
      employ: "",
      title: "",
      city: "",
      start: 0,
      end: 0,
      pay: 0,
      reason: "",
      experience: [],
    };

    this.displayForm = this.displayForm.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.editBtn = this.editBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayForm() {
    const { employ, title, city, start, end, pay, reason, forms } = this.state;
    if (forms > 0) {
      return (
        <form id="experience">
          <p>Please enter information about your most recent employer</p>
          <fieldset form="experience">
            <label htmlFor="employ">Employer Name:</label>
            <input
              type="text"
              name="employ"
              value={employ}
              onChange={this.handleChange}
            />
            <label htmlFor="title">Your Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.handleChange}
            />
            <label htmlFor="start">Start Date:</label>
            <input
              type="date"
              name="start"
              value={start}
              onChange={this.handleChange}
            />
            <label htmlFor="end">End Date:</label>
            <input
              type="date"
              name="end"
              value={end}
              onChange={this.handleChange}
            />
            <label htmlFor="pay">Salary (hourly):</label>
            <input
              type="number"
              name="pay"
              min="0"
              max="1000"
              value={pay}
              onChange={this.handleChange}
            />
            <label htmlFor="reason">Reason For Leaving:</label>
            <textarea
              name="reason"
              rows="2"
              cols="40"
              form="experience"
              maxLength="150"
              value={reason}
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.handleSubmit}>
              Submit Section
            </button>
            <button type="button" className="add" onClick={this.handleSubmit}>
              Add Another?
            </button>
          </fieldset>
        </form>
      );
    }
  }

  handleChange(e) {
    const data = e.target.value;
    const field = e.target.name;

    this.setState({
      [field]: data,
    });
  }

  handleSubmit(e) {
    const { employ, title, city, start, end, pay, reason, experience } =
      this.state;

    const toggle = e.target.className === "add" ? 1 : 0;

    this.setState({
      forms: [toggle],
      employ: "",
      title: "",
      city: "",
      start: "",
      end: "",
      pay: "",
      reason: "",
      experience: experience.concat({
        employ: [employ],
        title: [title],
        city: [city],
        start: [start],
        end: [end],
        pay: [pay],
        reason: [reason],
      }),
    });
  }

  editBtn() {
    if (this.state.experience.employ || this.state.forms < 1) {
      return (
        <div id="edit">
          <button type="button" onClick={this.edit}>
            Edit
          </button>
          <button type="button" onClick={this.delete}>
            Delete
          </button>
        </div>
      );
    }
  }

  edit() {
    let newList = [...this.state.experience];
    const lastEntry = newList.pop();

    this.setState({
      forms: 1,
      employ: [lastEntry.employ],
      title: [lastEntry.title],
      city: [lastEntry.city],
      start: [lastEntry.start],
      end: [lastEntry.end],
      pay: [lastEntry.pay],
      reason: [lastEntry.reason],
      experience: [newList],
    });
  }

  delete() {
    let newList;
    this.state.experience.length === 1
      ? (newList = [])
      : (newList = [...this.state.experience]);

    newList.pop();

    this.setState({
      forms: 1,
      experience: [newList],
    });
  }

  render() {
    return (
      <div class="experience">
        <div class="submitted">
          <Jobs input={[...this.state.experience]} />
          <this.editBtn />
        </div>
        <this.displayForm />
      </div>
    );
  }
}

export default Experience;
