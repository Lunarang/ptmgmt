import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PatientIndex } from './PatientIndex'

class Home extends Component {
  render() {
    return <div>Hi Friends! <Link to="/patients/1">View patient profile</Link><PatientIndex /></div>
  }
};

export default Home