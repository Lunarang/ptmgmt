import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import { getTheme } from '@table-library/react-table-library/baseline'

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
        searchBy: 'Name'
    });

    const handleSearch = (event) => {
        const name = event.target.name
        let value = event.target.value

        setSearch({
            ...search,
            [name]: value,
        })
    };

    let data = { nodes: patients };

    switch(search.searchBy) {
        case 'Date of Birth':
            data = {
                nodes: patients.filter((patient) =>
                patient.attorney.name.toLowerCase().includes(search.query.toLowerCase())
                ),
            };
            break;
        case 'Initial Visit':
            break;
        case 'Attorney':
            data = {
                nodes: patients.filter((patient) =>
                patient.attorney.name.toLowerCase().includes(search.query.toLowerCase())
                ),
            };
            break;
        default:
            data = {
                nodes: patients.filter((patient) =>
                patient.first_name.toLowerCase().includes(search.query.toLowerCase())
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
            <label>
                Search by 
                <select name="searchBy" value={search.searchBy} onChange={handleSearch} >
                    <option value="Name">Name</option>
                    <option value="Date of Birth">Date of Birth</option>
                    <option value="Initial Visit">Initial Visit</option>
                    <option value="Attorney">Attorney</option>
                </select>
            </label>
            <label>
                Patient Lookup
                <input name="query" type="text" value={search.query} onChange={handleSearch} />
            </label>
            <br />

            <CompactTable columns={COLUMNS} data={data} theme={theme} />
        </div>
    );
};

export default PatientTable