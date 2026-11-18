import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <Link to="/" className="navbar-brand">
                <img src="/images/logo.png" alt="" />
                <p>Software Engineer</p>
            </Link>

            <nav className="navbar-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </nav>

            <Link to="/contact" className="navbar-contact">Contact</Link>
        </header>
    )
}

export default Navbar;