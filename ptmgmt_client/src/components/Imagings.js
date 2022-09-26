import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addImaging, editImaging, deleteImaging, selectAllImagings } from '../reducers/imagingReducer'

function Imagings(props) {
    const allImagings = useSelector(selectAllImagings)
    const dispatch = useDispatch()
    const theme = useTheme(getTheme());

    const data = allImagings.filter((imaging) => {
        return imaging.patient_id === props.patient.id;
        })

    const [imagings, setImagings] = useState({nodes: data});

    const handleAddition = () => {
        const newRow = { 
                id: imagings.nodes.length+1,
                sent: new Date().toISOString().substr(0, 10),
                facility: '',
                scheduled: false,
                completed: new Date().toISOString().substr(0, 10),
                attempts_to_receive: 0,
                received: new Date().toISOString().substr(0, 10),
                areas: '',
                method: '',
                patient_id: props.patient.id
            }
        setImagings({
            ...imagings,
            nodes: [...imagings.nodes, newRow]
        });
    }

    // Delete
    const handleRemoval = (id) => {
        setImagings({
            ...imagings,
            nodes: imagings.nodes.filter((imaging) => {
              return imaging.id !== id;
            })
        });
        if (data.some(e => e.id === id)) { dispatch(deleteImaging(id)) }
    }

    const handleUpdate = (value, id, property) => {
        setImagings({
            ...imagings,
            nodes: imagings.nodes.map((imaging) => {
                if (imaging.id === id) {
                    return { ...imaging, [property]: value };
                } else {
                    return imaging;
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
        for (const imaging of imagings.nodes) {
            // if imaging not in data - add
            if (!data.some(e => e.id === imaging.id)) {
                dispatch(addImaging(imaging))
            // if imaging in data, but differs - edit
            } else if (data.some(e => e.id === imaging.id) === true && imaging !== data.find(e => e.id === imaging.id)) {
                dispatch(editImaging(imaging, imaging.id))
            }
        }
        alert("Changes Saved!")
    }

    const COLUMNS = [
        { 
            label: 'Date Sent', 
            renderCell: (imaging) => (
                <input
                type="date"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={handleDate(imaging.sent)}
                onChange={(event) => handleUpdate(new Date(event.target.value), imaging.id, 'sent')}
                />
            ),
        },
        { 
            label: 'Facility', 
            renderCell:  (imaging) => (
                <input
                type="text"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={imaging.facility}
                onChange={(event) => handleUpdate(event.target.value, imaging.id, 'facility')}
                />
            ), 
        },
        { 
            label: 'Scheduled', 
            renderCell:  (imaging) => (
                <input
                type="text"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={imaging.scheduled}
                onChange={(event) => handleUpdate(event.target.value, imaging.id, 'scheduled')}
                />
            ), 
        },
        { 
            label: 'Date Completed', 
            renderCell: (imaging) => (
                <input
                type="date"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={handleDate(imaging.completed)}
                onChange={(event) => handleUpdate(new Date(event.target.value), imaging.id, 'completed')}
                />
            ),
        },
        { 
            label: 'Attempts to Receive', 
            renderCell:  (imaging) => (
                <input
                type="number"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={imaging.attempts_to_receive}
                onChange={(event) => handleUpdate(event.target.value, imaging.id, 'attempts_to_receive')}
                />
            ), 
        },
        { 
            label: 'Date Received', 
            renderCell: (imaging) => (
                <input
                type="date"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={handleDate(imaging.received)}
                onChange={(event) => handleUpdate(new Date(event.target.value), imaging.id, 'received')}
                />
            ),
        },
        { 
            label: 'Areas', 
            renderCell:  (imaging) => (
                <input
                type="text"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={imaging.areas}
                onChange={(event) => handleUpdate(event.target.value, imaging.id, 'areas')}
                />
            ), 
        },
        { 
            label: 'Method', 
            renderCell:  (imaging) => (
                <input
                type="text"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={imaging.method}
                onChange={(event) => handleUpdate(event.target.value, imaging.id, 'method')}
                />
            ), 
        },
        { label: '', renderCell: (imaging) => <button lassName="remove-btn" onClick={() => handleRemoval(imaging.id)} >Remove</button> },
    ];

    return (
        <div>
            <CompactTable columns={COLUMNS} data={imagings} theme={theme} />
            <button onClick={() => handleAddition()} >Add</button>
            <br/>
            <button class="save" style={{display: data !== imagings.nodes ? 'block' : 'none'}} onClick={() => handleSave()}>Save Changes</button>
        </div>
    );
};

export default Imagings