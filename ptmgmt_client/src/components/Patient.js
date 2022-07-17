import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Patient extends Component {
  render() {
    return (
      <div>
        Patient Profile
        <Link to={`/patients/${this.props.id}/edit`} className="button muted-button">
          Edit
        </Link>
      </div>
    )
  }
};

export default Patient