
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <header className="header">
            <Link to="/" className="header__link-logo">
                <img src={logo} className="header__logo" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <nav className="header__nav">
                <Link to={"/login"} className="header__link-nav">
                    <i className="fa fa-user-circle header__icon"></i>
                   
                </Link>
                
                    <Link to="/" className="header__link-nav">
                        <i className="fa fa-sign-out"></i>
                            Sign Out
                    </Link>
               
            </nav>
        </header>
    );
};

export default Header;