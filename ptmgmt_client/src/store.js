import { configureStore } from '@reduxjs/toolkit'
import patientReducer from './reducers/patientReducer'
import attorneyReducer from './reducers/attorneyReducer'

const reducer = {
  patients: patientReducer,
  attorneys: attorneyReducer,
};

const store = configureStore({
  reducer
});

export default store