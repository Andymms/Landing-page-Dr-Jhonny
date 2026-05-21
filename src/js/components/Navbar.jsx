import React from "react";

export const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top px-4 shadow-sm">
            <a className="navbar-brand fw-bold" href="#inicio">Dr. Jhonny Mujica</a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="nav nav-pills navbar-nav">
                    <li className="nav-item"><a className="nav-link text-white" href="#inicio">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="#sobre-mi">Sobre Mí</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="#contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};