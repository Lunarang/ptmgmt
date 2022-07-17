import React, { Component } from 'react'

// controlled form - derives input values from state
class PatientForm extends Component {
  state = {
    first_name: '',
  }

  handleSubmit = (event) => {
    // event.preventDefault()
    // this.sendFormData(this.state)
  }

  handleChange = (event) => {
    this.setState({
      first_name: event.target.value,
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input 
            type="text" 
            name="first_name" 
            onChange={event => this.handleChange(event)} 
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
};

export default PatientForm