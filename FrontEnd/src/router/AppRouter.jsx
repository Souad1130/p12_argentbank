import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";

/**
* Le composant AppRouter gère la navigation dans l'application,
 en affichant les différentes routes et les composants correspondants.
* @component
* @returns {JSX.Element}
*/
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/profile" element={<Dashboard />} />
           
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default AppRouter;