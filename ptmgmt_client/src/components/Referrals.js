import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReferral, editReferral, deleteReferral, selectAllReferrals } from '../reducers/referralReducer'

function Referrals(props) {
    const allReferrals = useSelector(selectAllReferrals)
    const dispatch = useDispatch()
    const theme = useTheme(getTheme());

    const data = allReferrals.filter((referral) => {
        return referral.patient_id === props.patient.id;
        })

    const [referrals, setReferrals] = useState({nodes: data});

    const handleAddition = () => {
        const newRow = { 
                id: referrals.nodes.length+1,
                sent: new Date().toISOString().substr(0, 10),
                facility: '',
                reason: '',
                patient_id: props.patient.id
            }
        setReferrals({
            ...referrals,
            nodes: [...referrals.nodes, newRow]
        });
    }

    // Delete
    const handleRemoval = (id) => {
        setReferrals({
            ...referrals,
            nodes: referrals.nodes.filter((referral) => {
              return referral.id !== id;
            })
        });
        // delete from database as well
        if (data.some(e => e.id === id)) { dispatch(deleteReferral(id)) }
    }

    const handleUpdate = (value, id, property) => {
        setReferrals({
            ...referrals,
            nodes: referrals.nodes.map((referral) => {
                if (referral.id === id) {
                    return { ...referral, [property]: value };
                } else {
                    return referral;
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
        for (const referral of referrals.nodes) {
            // if referral not in data - add
            if (!data.some(e => e.id === referral.id)) {
                dispatch(addReferral(referral))
            // if referral in data, but differs - edit
            } else if (data.some(e => e.id === referral.id) === true && referral !== data.find(e => e.id === referral.id)) {
                dispatch(editReferral(referral, referral.id))
            }
        }
        alert("Changes Saved!")
    }

    const COLUMNS = [
        { 
            label: 'Date Sent', 
            renderCell: (referral) => (
                <input
                type="date"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={handleDate(referral.sent)}
                onChange={(event) => handleUpdate(new Date(event.target.value), referral.id, 'sent')}
                />
            ),
        },
        { 
            label: 'Facility', 
            renderCell:  (referral) => (
                <input
                type="text"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={referral.facility}
                onChange={(event) => handleUpdate(event.target.value, referral.id, 'facility')}
                />
            ), 
        },
        { 
            label: 'Reason', 
            renderCell:  (referral) => (
                <input
                type="text"
                style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
                value={referral.reason}
                onChange={(event) => handleUpdate(event.target.value, referral.id, 'reason')}
                />
            ), 
        },
        { label: '', renderCell: (referral) => <button className="remove-btn" onClick={() => handleRemoval(referral.id)} >Remove</button> },
    ];

    return (
        <div>
            <CompactTable columns={COLUMNS} data={referrals} theme={theme} />
            <button onClick={() => handleAddition()} >Add</button>
            <br/>
            <button className="save" style={{display: data !== referrals.nodes ? 'block' : 'none'}} onClick={() => handleSave()}>Save Changes</button>
        </div>
    );
};

export default Referrals