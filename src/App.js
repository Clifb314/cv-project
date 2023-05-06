import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: {
        fname: '',
        lname: '',
        age: 0,
        address: '',
        city: '',
        zip: 0,
        email: '',
        pnum: 0,
      },
      school: {
        schoolName: '',
        study: '',
        grad: false,
        start: 0,
        end: 0,
      },
      experience: {
        employ: '',
        title: '',
        city: '',
        start: 0,
        end: 0,
        pay: 0,
        reason: '',
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { basic, school, experience } = this.state

    return (
      <div id="CV">
        <form id="basic" onSubmit={this.handleSubmit}>
          <p>First, please enter some basic information</p>
          <label htmlFor="fname">First Name:</label>
          <input type="text" name="name" value={basic.fname} onChange={this.handleChange} />

          <label htmlFor="lnam">Last Name:</label>
          <input type="text" name="lname" value={basic.lname} onChange={this.handleChange} />

          <label htmlFor="age">Age:</label>
          <input type="number" name="age" value={basic.age} onChange={this.handleChange} />

          <label htmlFor="address">Address:</label>
          <input type="text" name="address" value={basic.address} onChange={this.handleChange} />

          <label htmlFor="city">City:</label>
          <input type="text" name="city" value={basic.city} onChange={this.handleChange} />

          <label htmlFor="zip">Zip-code:</label>
          <input type="number" name="zip" value={basic.zip} onChange={this.handleChange} />

          <label htmlFor="email">e-mail address:</label>
          <input type="email" name="email" value={basic.email} onChange={this.handleChange} />

          <label htmlFor="pnum">Phone Number:</label>
          <input type="number" name="pnum" value={basic.pnum} onChange={this.handleChange} />

          <button type="submit" form="basic">Submit Section</button>
        </form>

        <form id="school" onSubmit={this.handleSubmit}>
          <p>Please enter information about your college education</p>
          <label htmlFor="school">College Name:</label>
          <input type="text" name="schoolName" value={school.schoolName} onChange={this.handleChange} />

          <label htmlFor="study">Field of Study/Major:</label>
          <input type="text" name="study" value={school.study} onChange={this.handleChange} />
          
          <div>
            <p>Did you graduate?</p>
            <label htmlFor="gradY">Yes</label>
            <input type="radio" name="grad" id="gradY" value="true" checked={school.grad === true} onChange={this.handleChange} />
            <label htmlFor="gradN">No</label>
            <input type="radio" name="grad" id="gradN" value="false" checked={school.grad === false} onChange={this.handleChange} />
          </div>
          
          <label htmlFor="start">Start Date:</label>
          <input type="date" name="start" value={school.start} onChange={this.handleChange} />
          
          <label htmlFor="end">End Date:</label>
          <input type="date" name="end" value={school.end} onChange={this.handleChange} />
          
          <button type="submit" form="school">Submit Section</button>
        </form>

        <form id="experience" onSubmit={this.handleSubmit}>
          <p>Please enter information about your most recent employer</p>
          <label htmlFor="employ">Employer Name:</label>
          <input type="text" name="employ" value={experience.employ} onChange={this.handleChange} />

          <label htmlFor="title">Your Title:</label>
          <input type="text" name="title" value={experience.title} onChange={this.handleChange} />

          <label htmlFor="city">City:</label>
          <input type="text" name="city" value={experience.city} onChange={this.handleChange} />

          <label htmlFor="start">Start Date:</label>
          <input type="date" name="start" value={experience.start} onChange={this.handleChange} />

          <label htmlFor="end">End Date:</label>
          <input type="date" name="end" value={experience.end} onChange={this.handleChange} />

          <label htmlFor="pay">Salary (hourly):</label>
          <input type="number" name="pay" min="0" max="1000" value={experience.pay} onChange={this.handleChange} />

          <label htmlFor="reason">Reason For Leaving:</label>
          <textarea name="reason" rows="2" cols="40" form="experience" maxLength="150" value={experience.reason} onChange={this.handleChange} />

          <button type="submit" form="experience">Submit Section</button>
        </form>
      </div>
    );
  }
}

export default App;
