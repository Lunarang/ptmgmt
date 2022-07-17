import Patient from './Patient'
import { useParams } from 'react-router-dom'

// In order for this class component to have access to
// React Router V6 hooks (to capture the id param)
// It must be wrapped in a functional component 
// that passes hook values as props
const PatientWrapper = () => {
    const id = useParams().id

    return <Patient id={id} />
};

export default PatientWrapper