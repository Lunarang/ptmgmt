import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editPatient } from '../reducers/patientReducer'
import PatientForm from './PatientForm'

function PatientEdit() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const patientId = useParams().id
    const index = patientId - 1
    const patientData = useSelector(state => state.patients.data[index])
    
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        dob: '',
        sex: '',
        email: '',
        referred_by: '',
        dol: '',
        initial: '',
        attorney_id: 0,
        case_manager: '',
        notes: ''
      })

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(editPatient(formData, patientId))
        navigate(`/patients/${patientId}`)
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
        <div>
        <h1>Edit Patient</h1>
        <PatientForm 
            formData={patientData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
        />
        </div>
    )
};

export default PatientEdit