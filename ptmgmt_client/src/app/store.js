import { configureStore } from '@reduxjs/toolkit'
import patientReducer from '../features/patients/patientSlice'

// by default uses thunk middleware and dev tools extension compatibility
export const store = configureStore({
  reducer: {
    patients: patientReducer
  },
});