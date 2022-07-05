import { BrowserRouter as Router } from "react-router-dom";
import Views from "./Views";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css"

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