import React from "react";

export const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-light fixed-top px-4 shadow-sm">
            <div className="container justify-content-center">
                <a className="navbar-brand fw-bold me-5" href="#inicio">Dr. Jhonny Mujica</a>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul className="nav nav-pills navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#inicio"
                            style={{ color: "#0447ac" }}>INICIO</a></li>
                        <li className="nav-item"><a className="nav-link" href="#sobre-mi"
                            style={{ color: "#0447ac" }}>SOBRE MI</a></li>
                        <button className="contacto-button btn rounded-pill ms-5">CONTACTO</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};