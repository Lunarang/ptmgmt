import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../components/Home'
import PatientForm from '../components/PatientForm'
import PatientWrapper from '../components/PatientWrapper'
import NotFound from './NotFound'

const Views = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/patients">
                <Route path="new" element={<PatientForm />}/>
                <Route path=":id" element={<PatientWrapper />} />
                <Route path=":id/edit" element={<PatientForm />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
};

export default Views