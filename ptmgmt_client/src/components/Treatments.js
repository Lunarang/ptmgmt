import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTreatment, editTreatment, deleteTreatment, selectAllTreatments } from '../reducers/treatmentReducer'

function Treatments(props) {
    const allTreatments = useSelector(selectAllTreatments)
    const dispatch = useDispatch()
    const theme = useTheme(getTheme());

    const data = allTreatments.filter((treatment) => {
        return treatment.patient_id === props.patient.id;
        })

    const [treatments, setTreatments] = useState({nodes: data});

    const handleAddition = () => {
        const newRow = { 
                id: treatments.nodes.length+1,
                start: new Date().toISOString().substr(0, 10),
                frequency: '',
                therapy: '',
                patient_id: props.patient.id
            }
        setTreatments({
            ...treatments,
            nodes: [...treatments.nodes, newRow]
        });
    }

    // Delete
    const handleRemoval = (id) => {
        setTreatments({
            ...treatments,
            nodes: treatments.nodes.filter((treatment) => {
              return treatment.id !== id;
            })
        });
        // delete from database as well
        if (data.some(e => e.id === id)) { dispatch(deleteTreatment(id)) }
    }

    const handleUpdate = (value, id, property) => {
        setTreatments({
            ...treatments,
            nodes: treatments.nodes.map((treatment) => {
                if (treatment.id === id) {
                    return { ...treatment, [property]: value };
                } else {
                    return treatment;
                }
            }),
        });
    };

    const handleDate = (date) => {
        if (date instanceof Date) {
            return date.toISOString().substr(0, 10);
        } else {
            return date;
        }
    }

    // Add, Edit
    const handleSave = () => {
        for (const treatment of treatments.nodes) {
            // if treatment not in data - add
            if (!data.some(e => e.id === treatment.id)) {
                dispatch(addTreatment(treatment))
            // if treatment in data, but differs - edit
            } else if (data.some(e => e.id === treatment.id) === true && treatment !== data.find(e => e.id === treatment.id)) {
                dispatch(editTreatment(treatment, treatment.id))
            }
        }
        alert("Changes Saved!")
    }

    const COLUMNS = [
        { 
            label: 'Start Date', 
            renderCell: (treatment) => (
                <input
                type="date"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={handleDate(treatment.start)}
                onChange={(event) => handleUpdate(new Date(event.target.value), treatment.id, 'start')}
                />
            ),
        },
        { 
            label: 'Frequency', 
            renderCell:  (treatment) => (
                <input
                type="text"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={treatment.frequency}
                onChange={(event) => handleUpdate(event.target.value, treatment.id, 'frequency')}
                />
            ), 
        },
        { 
            label: 'Therapy', 
            renderCell:  (treatment) => (
                <input
                type="text"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={treatment.therapy}
                onChange={(event) => handleUpdate(event.target.value, treatment.id, 'therapy')}
                />
            ), 
        },
        { label: '', renderCell: (treatment) => <button className="remove-btn" onClick={() => handleRemoval(treatment.id)} >Remove</button> },
    ];

    return (
        <div>
            <CompactTable columns={COLUMNS} data={treatments} theme={theme} />
            <button onClick={() => handleAddition()} >Add</button>
            <br/>
            <button class="save" style={{display: data !== treatments.nodes ? 'block' : 'none'}} onClick={() => handleSave()}>Save Changes</button>
        </div>
    );
};

export default Treatments