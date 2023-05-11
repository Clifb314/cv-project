import "./App.css";
import { Component } from "react";
import Personal from "./components/components";
import Education from "./components/education";
import Experience from "./components/experience";

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

        <Experience />
      </div>
    );
  }
}

export default App;
