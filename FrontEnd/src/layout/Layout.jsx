import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
    const location = useLocation();
    console.log (location.pathname)
    return (
        <>
            <Header />
            <main className={location.pathname === "/" ? "bg-white" : "bg-dark"}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;