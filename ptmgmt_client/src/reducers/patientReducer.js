const initialState = {
  data: [],
  status: 'idle',
  error: null
};

const patientReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_PATIENT': {
      return {
        ...state, 
        data: [...state.data, action.payload]
      }
    }
    case 'EDIT_PATIENT': {
      return { data: state.data.map((patient, index) => {
          // find patient with the matching id
          if(patient.id === action.payload.id) {
            // Return a new object
            return {
              ...patient,  // copy existing patient
              ...action.payload  // merge with new data, replacing old values
            }
          } else {
            // return patient as is
            return patient;
          }
        })
      }
    }
    case 'DELETE_PATIENT': {
      return {
        ...state,
        
      }
    }
    case 'FETCH_PATIENTS_PENDING': {
      return {
        ...state,
        status: 'pending'
      }
    }
    case 'FETCH_PATIENTS_FULFILLED': {
      return {
        ...state,
        status: 'succeeded',
        data: action.payload
      }
    }
    case 'FETCH_PATIENTS_REJECTED': {
      return {
        ...state,
        status: 'failed',
        error: action.payload.error.message
      }
    }
    default:
      return state
  }
};

export default patientReducer

export const selectAllPatients = state => state.patients.data

export const selectPatientById = (state, id) => 
  state.patients.data.find(patient => patient.id === id)


// GET patients from API
export const fetchPatients =  () => async (dispatch) => {
  dispatch({ type: 'FETCH_PATIENTS_PENDING' })
  const response = await fetch('http://127.0.0.1:3001/patients')
  const patients = await response.json()
  dispatch({ type: 'FETCH_PATIENTS_FULFILLED', payload: patients })
}

// POST patient to API
export const addPatient = formData => async (dispatch) => {
  const response = await fetch('http://127.0.0.1:3001/patients', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // Format data to meet strong param standards
    body: JSON.stringify({
      patient: formData
    })
  })
  const newPatient = await response.json()
  dispatch({ type: 'ADD_PATIENT', payload: newPatient })
}

// PATCH patient to API
export const editPatient = (formData, id) => async (dispatch) => {
  const response = await fetch(`http://127.0.0.1:3001/patients/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      patient: formData
    })
  })
  const updatedPatient = await response.json()
  dispatch({ type: 'EDIT_PATIENT', payload: updatedPatient })
}