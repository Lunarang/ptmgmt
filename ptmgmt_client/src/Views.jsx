import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import NewPatient from "./components/NewPatient"
import Patient from "./components/Patient"
import NotFound from "./NotFound"

const Views = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/patients">
                <Route path="new" element={<NewPatient />}/>
                <Route path=":id" element={<Patient />} />
                <Route path="edit" element={<div>Edit Patient</div>} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
};

export default Views;