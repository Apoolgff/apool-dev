import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/tv.gif" alt="Logo" className="navbar-logo" />
                <span className="navbar-text">Apool</span>
            </div>
            <div className="navbar-right">
                <Link to="/" className="navbar-link">Inicio</Link>
                <Link to="/gallery" className="navbar-link">Videos</Link>
                <Link to="/about" className="navbar-link">Acerca</Link>
                <Link to="/contact" className="navbar-link">Contacto</Link>
            </div>
        </nav>
    );
};

export default Navbar;
