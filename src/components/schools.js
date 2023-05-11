import { Component } from "react";
import uniqid from "uniqid";

class Schools extends Component {
  constructor(props) {
    super(props);

    this.display = this.display.bind(this);
  }

  display() {
    if (this.props.schoolList.length > 0) {
      console.log(this.props.schoolList);
      const list = this.props.schoolList.map((school) => {
        if (school.schoolName) {
          return (
            <div id="school" key={uniqid()}>
              <p>School: {school.schoolName}</p>
              <p>Major: {school.study}</p>
              <p>Graduated?: {school.grad === true ? "Yes" : "No"}</p>
              <p>Start: {school.start}</p>
              <p>End: {school.end}</p>
            </div>
          );
        }
      });
      return <div>{list}</div>;
    }
  }

  render() {
    return <this.display />;
  }
}

export default Schools;
