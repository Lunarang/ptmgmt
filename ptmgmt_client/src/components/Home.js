import PatientTable from './PatientTable'
import { useSelector } from 'react-redux'
import { selectAllPatients } from '../reducers/patientReducer'

function Home() {
    const totalPatients = useSelector(selectAllPatients).length
    return (
      <div className="main">
        <p align="center">There are {totalPatients} patients total!</p>
        <PatientTable />
      </div>
    )
};

export default Home