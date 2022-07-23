import { useSelector } from 'react-redux'
import { selectAllPatients } from '../reducers/patientReducer'
import { Link } from 'react-router-dom'
import { selectAttorneyById } from '../reducers/attorneyReducer';

const PatientExcerpt = ({ patient }) => {
    const attorney = useSelector(state => selectAttorneyById(state, patient.attorney_id))
    return (
      <div className="patient-excerpt" key={patient.id}>
        <h3>{patient.first_name} {patient.last_name}</h3>
        {patient.sex} {patient.dob} {patient.initial} {attorney.name}
        <Link to={`/patients/${patient.id}`} className="button muted-button">
          View Patient
        </Link>
      </div>
    )
};

export const PatientIndex = () => {
  const patients = useSelector(selectAllPatients)
  const patientStatus = useSelector(state => state.patients.status)
  const attorneyStatus = useSelector(state => state.attorneys.status)

  let content

  if (patientStatus === 'succeeded' && attorneyStatus === 'succeeded') {
    content = patients.map(patient => (
      <PatientExcerpt key={patient.id} patient={patient} />
    ))
  }

  return (
    <section className="patient-index">
      <h2>Patients</h2>
      {content}
    </section>
  )
}