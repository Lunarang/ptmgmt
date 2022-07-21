import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPatientById } from '../reducers/patientReducer'

function Patient() {
  const id = parseInt(useParams().id)
  const patient = useSelector(state => selectPatientById(state, id))

  return (
    <div>
      <h2>{patient.first_name} {patient.last_name}</h2>
      Date of Birth: {patient.dob}
      Sex: {patient.sex}
      Email: {patient.email}
      Referred By: {patient.referred_by}
      
      Date of Loss: {patient.dol}
      Initial Visit: {patient.initial}
      Attorney: {patient.attorney}
      Case Manager: {patient.case_manager}
      Notes: {patient.notes}

      <Link to={`/patients/${id}/edit`} className="button muted-button">
        Edit
      </Link>
    </div>
  )
};

export default Patient