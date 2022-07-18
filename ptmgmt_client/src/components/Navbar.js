import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="title">PTMGMT</Link>
            <Link to="/patients/new" className="new">Add Patient</Link>
        </nav>
    );
};

export default Navbar