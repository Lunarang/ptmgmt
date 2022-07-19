import { useSelector } from 'react-redux'
import { selectAllPatients } from '../reducers/patientReducer'
import { Link } from 'react-router-dom'

const PatientExcerpt = ({ patient }) => {
    return (
      <div className="patient-excerpt" key={patient.id}>
        <h3>{patient.first_name} {patient.last_name}</h3>
        <Link to={`/patients/${patient.id}`} className="button muted-button">
          View Patient
        </Link>
      </div>
    )
};

export const PatientIndex = () => {
    const patients = useSelector(selectAllPatients)
    const patientStatus = useSelector(state => state.patients.status)
    const error = useSelector(state => state.patients.error)

    let content

    if (patientStatus === 'loading') {
      content = <p>Loading...</p>
    } else if (patientStatus === 'succeeded') {
      content = patients.map(patient => (
        <PatientExcerpt key={patient.id} patient={patient} />
      ))
    } else if (patientStatus === 'failed') {
      content = <div>{error}</div>
    }
  
    return (
      <section className="patient-index">
        <h2>Patients</h2>
        {content}
      </section>
    )
}