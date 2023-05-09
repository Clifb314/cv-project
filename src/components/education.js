import { Component } from "react";
import uniqid from 'uniqid';

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            forms: 1,
            schoolName: "",
            study: "",
            grad: false,
            start: "",
            end: "",
            schools: [
                {
                    schoolName: "",
                    study: "",
                    grad: false,
                    start: "",
                    end: "",
                    id: uniqid()
                }    
            ],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.displayForm = this.displayForm.bind(this)
        this.addForm = this.addForm.bind(this)
        this.increase = this.increase.bind(this)
        this.remove = this.remove.bind(this)
    }

    handleChange(e) {
        const data = e.target.type === "radio" ? e.target.checked : e.target.value
        const field = e.target.name

        this.setState({
            [field]: data
        })
    }

    handleSubmit(e) {
        const { schoolName, study, grad, start, end, schools } = this.state
        e.preventDefault()

        const fieldset = e.target.lastChild;
        fieldset.disabled = true;

        this.setState({
            schools: schools.concat({
                schoolName: schoolName,
                study: study,
                grad: grad,
                start: start,
                end: end,
                id: uniqid(),
            }),
            schoolName: '',
            study: '',
            grad: false,
            start: '',
            end: '',
        })

        console.log(this.state)
    }



    displayForm() {
        const { schoolName, study, grad, start, end } = this.state
        return (
            <form id="school" onSubmit={this.handleSubmit}>
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
              <button type="submit" form="school">
                Submit Section
              </button>
              <button type="button" onClick={this.remove}>Remove</button>
            </fieldset>
          </form>
        )
    }

    remove(e) {
      if (this.state.forms < 2) {
        return
      } else {
        const form = e.target.form
        while (form.firstChild) {
          form.removeChild(form.firstChild)
        }
        form.hidden = true
        this.setState({
          forms: this.state.forms - 1
        })
      }
    }

    addForm() {
        const { forms } = this.state
        let output = []
        for (let x = 0; x < forms; x++) {
            output.push(<this.displayForm />)
        }

        console.log(output)
        return (
            <div className="forms">
             {output}   
            </div>
        )
    }

    increase(e) {
      const { schoolName, study, grad, start, end, forms } = this.state

      const btn = e.target
      const form = btn.previousElementSibling
      const fieldset = form.lastChild

      this.setState({
          forms: forms + 1
      })

      if (this.state.forms > 4) {
        btn.disabled = true
      }

      fieldset.disabled = true;

      this.setState({
          schools: schools.concat({
              schoolName: schoolName,
              study: study,
              grad: grad,
              start: start,
              end: end,
              id: uniqid(),
          }),
          schoolName: '',
          study: '',
          grad: false,
          start: '',
          end: '',
      })

      console.log(this.state)

    }

    render() {
        return (
            <div id="educationForm">
                <p>Please enter information about your college education</p>
                <this.addForm />
                <button type="button" onClick={this.increase}>Add more?</button>
            </div>
        )
    }
}

export default Education