import { Link } from "react-router-dom";

/**
* Component de Error Connection
*/
const ErrorConnection = () => {
    return (
        <div className="error-connection">
            <h2 className="error-connection__title">Please sign-in to view your profile</h2>
            <Link to="/login" className="error-connection__link">Go to the Sign-In page</Link>
        </div>
    );
};

export default ErrorConnection;