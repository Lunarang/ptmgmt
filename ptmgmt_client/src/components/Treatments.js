import { CompactTable } from '@table-library/react-table-library/compact'
import React, { useState } from 'react'

function Treatments() {
    const test = [
        { id: 1,
            start: "2022-05-23",
            frequency: "2x/wk for 3wks",
            therapy: "2msg/adj"
        },
        { id: 2,
            start: "2022-05-23",
            frequency: "2x/wk for 3wks",
            therapy: "2msg/adj"
        },
        { id: 3,
            start: "2022-05-23",
            frequency: "2x/wk for 3wks",
            therapy: "2msg/adj"
        },
    ]

    const [treatments, setTreatments] = useState({nodes: test});

    const handleAddition = () => {
        const newRow = { 
                id: treatments.nodes[treatments.nodes.length - 1].id+1,
                start: new Date().toISOString().substr(0, 10),
                frequency: '',
                therapy: ''
            }
        console.log(newRow)
        setTreatments({
            ...treatments,
            nodes: [...treatments.nodes, newRow]
        });
    }

    const handleRemoval = (id) => {
        setTreatments({
            ...treatments,
            nodes: treatments.nodes.filter((treatment) => {
              return treatment.id !== id;
            })
        });
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

    const handleSave = () => {

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
        { label: '', renderCell: (treatment) => <button onClick={() => handleRemoval(treatment.id)} >Remove</button> },
    ];

    return (
        <div>
            <CompactTable columns={COLUMNS} data={treatments} />
            <button onClick={() => handleAddition()} >Add</button>
            <br/>
            <button style={{display: test !== treatments.nodes ? 'block' : 'none'}} onClick={() => handleSave()}>Save Changes</button>
        </div>
    );
};

export default Treatments