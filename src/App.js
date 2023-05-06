import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id="CV">
        <form id="basic" onSubmit={this.handleSubmit}>
          <label htmlFor="fname">Name:</label>
          <input type="text" name="name" />

          <label htmlFor="lnam">Name:</label>
          <input type="text" name="lname" />

          <label htmlFor="age">Name:</label>
          <input type="number" name="age" />

          <label htmlFor="address">Name:</label>
          <input type="text" name="address" />

          <label htmlFor="city">Name:</label>
          <input type="text" name="city" />

          <label htmlFor="zip">Name:</label>
          <input type="number" name="zip" />

          <label htmlFor="email">Name:</label>
          <input type="text" name="email" />

          <label htmlFor="pnum">Name:</label>
          <input type="number" name="pnum" />
        </form>

        <form id="school">
          <label htmlFor="school">Name:</label>
          <input type="text" name="school" />
          <label htmlFor="study">Name:</label>
          <input type="text" name="study" />
          <label htmlFor="grad">Name:</label>
          <input type="text" name="grad" />
          <label htmlFor="start">Name:</label>
          <input type="text" name="start" />
          <label htmlFor="end">Name:</label>
          <input type="text" name="end" />
        </form>

        <form id="experience">
          <label htmlFor="employ">Name:</label>
          <input type="text" name="employ" />

          <label htmlFor="title">Name:</label>
          <input type="text" name="title" />

          <label htmlFor="city">Name:</label>
          <input type="text" name="city" />

          <label htmlFor="start">Name:</label>
          <input type="text" name="start" />

          <label htmlFor="end">Name:</label>
          <input type="text" name="end" />

          <label htmlFor="pay">Name:</label>
          <input type="text" name="pay" />

          <label htmlFor="reason">Name:</label>
          <input type="text" name="reason" />
        </form>
      </div>
    );
  }
}

export default App;
