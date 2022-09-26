import { configureStore } from '@reduxjs/toolkit'
import patientReducer from './reducers/patientReducer'
import attorneyReducer from './reducers/attorneyReducer'
import treatmentReducer from './reducers/treatmentReducer'
import imagingReducer from './reducers/imagingReducer'
import referralReducer from './reducers/referralReducer'

const reducer = {
  patients: patientReducer,
  attorneys: attorneyReducer,
  treatments: treatmentReducer,
  imagings: imagingReducer,
  referrals: referralReducer,
};

const store = configureStore({
  reducer
});

export default store