import { Component } from "react";
import uniqid from "uniqid";

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.display = this.display.bind(this);
  }

  display() {
    if (this.props.input.length > 0) {
      const list = this.props.input.map((job) => {
        if (job.employ) {
          return (
            <div className="jobs" key={uniqid()}>
              <p>Employer: {job.employ}</p>
              <p>Title: {job.title}</p>
              <p>City: {job.city}</p>
              <p>Start: {job.start}</p>
              <p>End: {job.end}</p>
              <p>Salary (hourly): {job.pay}</p>
              <p>Reason for Leaving: {job.reason}</p>
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

export default Jobs;
