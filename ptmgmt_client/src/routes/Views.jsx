import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import PatientAdd from '../components/PatientAdd'
import PatientEdit from '../components/PatientEdit'
import Patient from '../components/Patient'
import NotFound from './NotFound'
import Attorney from '../components/Attorney'

const Views = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/patients">
                <Route path="new" element={<PatientAdd />} />
                <Route path=":id" element={<Patient />} />
                <Route path=":id/edit" element={<PatientEdit />} />
            </Route>
            <Route path="/attorneys">
                <Route path=":id" element={<Attorney />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
};

export default Views