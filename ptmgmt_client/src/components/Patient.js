import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPatientById } from '../reducers/patientReducer'
import formatDate from '../style/dateFormatter'
import DeletePatient from './DeletePatient'
import Treatments from './Treatments'
// import Imagings from './Imagings'
// import Referrals from './Referrals'

function Patient() {
  const id = parseInt(useParams().id)
  const patient = useSelector(state => selectPatientById(state, id))
  const navigate = useNavigate()

  return (
    <div>
      <h3>Patient Information</h3>
      <h2>{patient.first_name} {patient.last_name}</h2>
      Date of Birth: {formatDate(patient.dob)}<br/>
      Sex: {patient.sex.toUpperCase()}<br/>
      Email: {patient.email}<br/>
      Referred By: {patient.referred_by}<br/>
      
      Date of Loss: {formatDate(patient.dol)}<br/>
      Initial Visit: {formatDate(patient.initial)}<br/>
      Attorney: {patient.attorney.name}<br/>
      Case Manager: {patient.case_manager}<br/>
      Notes: {patient.notes}<br/>

      <br/>
      <button onClick={() => navigate(`/attorneys/${patient.attorney_id}`)} >View Attorney</button>
      <button onClick={() => navigate(`/patients/${patient.attorney_id}/edit`)} >Edit</button>

      <h3>Treatment Plan</h3>
      <Treatments />

      <h3>Imaging</h3>
      {/* <Imagings patient={patient} /> */}

      <h3>Referrals</h3>
      {/* <Referrals patient={patient} /> */}

      <br/>
      <DeletePatient id={id} />
    </div>
  )
};

export default Patient