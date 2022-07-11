import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }, [navigate]);
    return <div>Page Not Found</div>;
};

export default NotFound;