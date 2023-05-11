import { Component } from "react";
import uniqid from "uniqid";
import Schools from "./schools";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forms: 1,
      schoolName: "",
      study: "",
      grad: false,
      start: "",
      end: "",
      schools: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.addForm = this.addForm.bind(this);
    this.increase = this.increase.bind(this);
    this.remove = this.remove.bind(this);
    this.editBtn = this.editBtn.bind(this);
    this.editLast = this.editLast.bind(this);
    this.deleteLast = this.deleteLast.bind(this);
  }

  handleChange(e) {
    const data = e.target.type === "radio" ? e.target.checked : e.target.value;
    const field = e.target.name;

    this.setState({
      [field]: data,
    });
  }

  handleSubmit(e) {
    const { schoolName, study, grad, start, end, schools } = this.state;

    const fieldset = e.target.form.lastChild;
    fieldset.disabled = true;
    e.target.form.hidden = true;

    this.setState({
      forms: 0,
      schools: schools.concat({
        schoolName: schoolName,
        study: study,
        grad: grad,
        start: start,
        end: end,
        id: uniqid(),
      }),
      schoolName: "",
      study: "",
      grad: false,
      start: "",
      end: "",
    });

    this.remove(e);
    console.log(this.state);
  }

  displayForm() {
    const { schoolName, study, grad, start, end } = this.state;
    return (
      <form id="school" key={uniqid()}>
        <fieldset form="school">
          <label htmlFor="school">College Name:</label>
          <input
            type="text"
            name="schoolName"
            value={schoolName}
            onChange={this.handleChange}
          />
          <label htmlFor="study">Field of Study/Major:</label>
          <input
            type="text"
            name="study"
            value={study}
            onChange={this.handleChange}
          />
          <div>
            <p>Did you graduate?</p>
            <label htmlFor="gradY">Yes</label>
            <input
              type="radio"
              name="grad"
              id="gradY"
              value="true"
              checked={grad === true}
              onChange={this.handleChange}
            />
            <label htmlFor="gradN">No</label>
            <input
              type="radio"
              name="grad"
              id="gradN"
              value="false"
              checked={grad === false}
              onChange={this.handleChange}
            />
          </div>
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
          <button type="buttons" onClick={this.handleSubmit}>
            Submit Section
          </button>
          <button type="button" onClick={this.remove}>
            Remove
          </button>
          <button type="button" onClick={this.increase}>
            Add another college?
          </button>
        </fieldset>
      </form>
    );
  }

  remove(e) {
    if (this.state.forms < 0) {
      return;
    } else {
      const form = e.target.form;
      while (form.firstChild) {
        form.removeChild(form.firstChild);
      }
      form.hidden = true;
    }
  }

  addForm() {
    const { forms, schools } = this.state;
    let output = [];
    for (let x = 0; x < forms; x++) {
      output.push(
        <div key={uniqid()}>
          <this.displayForm />
        </div>
      );
    }

    return (
      <div id="education">
        <div className="forms">{output}</div>;
      </div>
    );
  }

  increase(e) {
    const { schoolName, study, grad, start, end, forms, schools } = this.state;

    const btn = e.target;

    if (this.state.schools.length > 4) {
      btn.disabled = true;
    }

    this.setState({
      schools: schools.concat({
        schoolName: schoolName,
        study: study,
        grad: grad,
        start: start,
        end: end,
        id: uniqid(),
      }),
      schoolName: "",
      study: "",
      grad: false,
      start: "",
      end: "",
    });

    console.log(this.state);
  }

  editBtn() {
    if (this.state.forms < 1 || this.state.schools.length > 0) {
      return (
        <div id="edit">
          <button type="button" onClick={this.editLast}>
            Edit
          </button>
          <button type="button" onClick={this.deleteLast}>
            Delete
          </button>
        </div>
      );
    }
  }

  deleteLast() {
    let newList = [...this.state.schools];
    newList.length === 1 ? (newList = []) : newList.pop();
    console.log(newList);
    this.setState({
      forms: 1,
      schools: [newList],
    });
  }

  editLast() {
    const newList = [...this.state.schools];
    const lastEntry = newList.pop();
    console.log(newList);
    this.setState({
      forms: 1,
      schoolName: [lastEntry.schoolName],
      study: [lastEntry.study],
      grad: [lastEntry.grad],
      start: [lastEntry.start],
      end: [lastEntry.end],
      schools: [newList],
    });
  }

  render() {
    return (
      <div id="educationForm">
        <p>Please enter information about your college education</p>
        <div id="submitted">
          <Schools schoolList={[...this.state.schools]} />
          <this.editBtn />
        </div>
        <this.addForm />
      </div>
    );
  }
}

export default Education;
