const initialState = {
  data: [],
  status: 'idle',
  error: null
};

const patientReducer = (state = initialState, action) => {
  switch(action.type){
    case 'NEW_PATIENT': {
      // return
    }
    case 'EDIT_PATIENT': {
      // return
    }
    case 'DELETE_PATIENT': {
      // return
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
        status: 'failed'
      }
      // state.error = action.error.message
    }
    default:
      return state
  }
};

export default patientReducer

export const selectAllPatients = state => state.patients.data

export const selectPatientById = (state, patientId) =>
  state.patients.data.find(patient => patient.id === patientId)

export const fetchPatients =  () => async (dispatch) => {
  dispatch({ type: 'FETCH_PATIENTS_PENDING' })
  const response = await fetch('http://127.0.0.1:3001/patients')
  const patients = await response.json()
  dispatch({ type: 'FETCH_PATIENTS_FULFILLED', payload: patients })
}