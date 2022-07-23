import { BrowserRouter as Router } from "react-router-dom";
import Views from "../routes/Views";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchPatients } from '../reducers/patientReducer'
import { fetchAttorneys } from '../reducers/attorneyReducer'

function App() {
  const dispatch = useDispatch()
  const patientStatus = useSelector(state => state.patients.status)
  const attorneyStatus = useSelector(state => state.attorneys.status)

  useEffect(() => {
      if (patientStatus === 'idle') {
        dispatch(fetchPatients())
      }
    }, [patientStatus, dispatch]
  );

  useEffect(() => {
      if (attorneyStatus === 'idle') {
        dispatch(fetchAttorneys())
      }
    }, [attorneyStatus, dispatch]
  );

  return (
      <Router>
          <Navbar />
          <Views />
          <Footer />
      </Router>
  );
};

export default App