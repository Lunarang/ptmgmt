import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, editItem, deleteItem, selectAllItems } from '../reducers/itemReducer'
import { selectAllPatients } from '../reducers/patientReducer';

// Pass in state selection to auto populate headers and content
function Tables(props) {
    const headers = props.map( p =>
            <th>p.key</th>
        );
    
    const content = props.map( p =>
            <tr>
                p.value.map( d => <td>d</td>)
            </tr>
        );
    return (
        <div className='dynamicTable'>
            <table>
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
};

export default Tables