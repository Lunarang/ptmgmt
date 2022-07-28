import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletePatient } from '../reducers/patientReducer'

function DeletePatient(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
        const result = window.confirm("Are you sure you want to delete this patient? This action cannot be undone...")
        if (result) {
            dispatch(deletePatient(props.id));
            navigate('/', {replace: true});
        };
    };

    return (
        <button onClick={handleClick}>Delete Patient</button>
    );
};

export default DeletePatient