import React, { Component } from 'react'
import { PatientIndex } from './PatientIndex'

class Home extends Component {
  render() {
    return (
      <div>
        Hi Friends!
        <PatientIndex />
      </div>
    )
  }
};

export default Home