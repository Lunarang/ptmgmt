import { BrowserRouter as Router } from "react-router-dom";
import Views from "../routes/Views";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Views />
            <Footer />
        </Router>
    );
};

export default App;