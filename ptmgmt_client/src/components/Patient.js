import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPatientById } from '../reducers/patientReducer'
import formatDate from '../style/dateFormatter'
import DeletePatient from './DeletePatient'
import Treatments from './Treatments'
import Imagings from './Imagings'

function Patient() {
  const id = parseInt(useParams().id)
  const patient = useSelector(state => selectPatientById(state, id))
  const navigate = useNavigate()

  return (
    <div className="main">
      <h1>Patient Information</h1>
      <div className="card">
        <h2>{patient.first_name} {patient.last_name}</h2>
        <b>Date of Birth:</b> {formatDate(patient.dob)}<br/>
        <b>Sex:</b> {patient.sex.toUpperCase()}<br/>
        <b>Email:</b> {patient.email}<br/>
        <b>Referred By:</b> {patient.referred_by}<br/>
        
        <b>Date of Loss:</b> {formatDate(patient.dol)}<br/>
        <b>Initial Visit:</b> {formatDate(patient.initial)}<br/>
        <b>Attorney:</b> {patient.attorney.name}<br/>
        <b>Case Manager:</b> {patient.case_manager}<br/>
        <b>Notes:</b> {patient.notes}<br/>
        <br/>
        <button className="muted-btn" onClick={() => navigate(`/patients/${patient.id}/edit`)} >Edit</button>
        <div className="center">
          <button align="left" onClick={() => navigate(`/attorneys/${patient.attorney_id}`)} >View Attorney</button>
        </div>
      </div>

      <h3>Treatment Plan</h3>
      <Treatments patient={patient} />

      <h3>Imaging</h3>
      <Imagings patient={patient} />

      <br/>
      <div className="center">
        <DeletePatient id={id} />
      </div>
    </div>
  )
};

export default Patient