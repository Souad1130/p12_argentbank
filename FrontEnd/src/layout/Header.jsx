import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { signOut } from "../redux/userSlice";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const userSignOut = () => {
        localStorage.clear();
        dispatch(signOut(user));
    };

    return (
        <header className="header">
            <Link to="/" className="header__link-logo">
                <img src={logo} className="header__logo" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <nav className="header__nav">
                <Link to={user.signin ? "/profile" : "/login"} className="header__link-nav">
                    <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: "8px" }} />
                    { user.signin ? `${user.firstName}` : "Sign In" }
                </Link>
                { user.signin && (
                    <Link to="/" className="header__link-nav" onClick={userSignOut}>
                        <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "8px" }} />
                        Sign Out
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
