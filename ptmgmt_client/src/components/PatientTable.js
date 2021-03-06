import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPatients } from '../reducers/patientReducer'
import { Link } from 'react-router-dom'
import formatDate from '../style/dateFormatter'

const PatientTable = () => {
    const patients = useSelector(selectAllPatients)
    const theme = useTheme(getTheme());

    const [search, setSearch] = useState({
        query: '',
        searchBy: 'Name',
    });

    let data = { nodes: patients };
    let placeholder = 'Patient Name'

    const handleSearch = (event) => {
        const name = event.target.name
        let value = event.target.value

        setSearch({
            ...search,
            [name]: value,
        })
    };

    switch(search.searchBy) {
        case 'Date of Birth':
            placeholder = 'mm/dd/yyyy'
            data = {
                nodes: patients.filter((patient) =>
                patient.dob.includes(search.query)
                ),
            };
            break;
        case 'Initial Visit':
            placeholder = 'mm/dd/yyyy'
            data = {
                nodes: patients.filter((patient) =>
                patient.dob.includes(search.query)
                ),
            };
            break;
        case 'Attorney':
            placeholder = 'Attorney Name'
            data = {
                nodes: patients.filter((patient) =>
                patient.attorney.name.toLowerCase().includes(search.query.toLowerCase())
                ),
            };
            break;
        default:
            placeholder = 'Patient Name'
            data = {
                nodes: patients.filter((patient) =>
                patient.first_name.toLowerCase().includes(search.query.toLowerCase()) || patient.last_name.toLowerCase().includes(search.query.toLowerCase())
                ),
            };
    }

    const COLUMNS = [
    { 
        label: 'Name', 
        renderCell: (patient) => 
            <Link to={`/patients/${patient.id}`} >
            { patient.first_name+' '+patient.last_name }
            </Link> 
    },
    { label: 'Sex', renderCell: (patient) => patient.sex.toUpperCase() },
    { label: 'Date of Birth', renderCell: (patient) => formatDate(patient.dob) },
    { label: 'Initial Visit', renderCell: (patient) => formatDate(patient.initial) },
    { label: 'Attorney', renderCell: (patient) => patient.attorney.name },
    ];

    return (
        <div>
            <div className="search">
                <h1>Patient Lookup</h1>
                <label>
                    Search by 
                    <select name="searchBy" value={search.searchBy} onChange={handleSearch} >
                        <option value="Name">Name</option>
                        <option value="Date of Birth">Date of Birth</option>
                        <option value="Initial Visit">Initial Visit</option>
                        <option value="Attorney">Attorney</option>
                    </select>
                    <input 
                        name="query" 
                        type="text" 
                        placeholder={placeholder}
                        value={search.query} 
                        onChange={handleSearch} />
                </label>
            </div>
            <br />

            <CompactTable columns={COLUMNS} data={data} theme={theme} />
        </div>
    );
};

export default PatientTable