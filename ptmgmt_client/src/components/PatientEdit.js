import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editPatient, selectPatientById } from '../reducers/patientReducer'
import PatientForm from './PatientForm'

function PatientEdit() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = parseInt(useParams().id)

    // find patient with the matching id
    const patientData = useSelector(state => selectPatientById(state, id))
    
    const [formData, setFormData] = useState({
        first_name: patientData.first_name,
        last_name: patientData.last_name,
        dob: patientData.dob,
        sex: patientData.sex,
        email: patientData.email,
        referred_by: patientData.referred_by || '',
        dol: patientData.dol,
        initial: patientData.initial,
        attorney_id: patientData.attorney_id,
        case_manager: patientData.case_manager || '',
        notes: patientData.notes || ''
      })

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(editPatient(formData, id))
        navigate(`/patients/${id}`, {replace: true})
        // redirect to profile, but do not allow user to return to edit page with back button
    }

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    // Pass data from form up to parent component's state by 
    // passing down a function as a prop
    return (
        <div class="main">
            <h1>Edit Patient</h1>
            <PatientForm 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
            />
        </div>
    )
};

export default PatientEdit