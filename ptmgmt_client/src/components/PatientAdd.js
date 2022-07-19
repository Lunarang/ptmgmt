import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPatient } from '../reducers/patientReducer'
import PatientForm from './PatientForm'

function PatientAdd() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        dispatch(addPatient(formData))
        navigate('/')
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
        <h1>Add Patient</h1>
        <PatientForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
        />
        </div>
    )
};

// class PatientAdd extends Component {
//   state = {
//     first_name: '',
//   }

//   handleSubmit = (event) => {
//     // event.preventDefault()
//     // this.sendFormData(this.state)
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }
  
//   // Pass data from form up to parent component's state by 
//   // passing down a function as a prop
//   render() {
//     return (
//       <div>
//         <h1>Add Patient</h1>
//         <PatientForm 
//             formData={this.state} 
//             handleChange={this.handleChange} 
//             handleSubmit={this.handleSubmit}
//         />
//       </div>
//     )
//   }
// };

export default PatientAdd