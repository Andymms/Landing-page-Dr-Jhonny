import React from "react";

export const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-light fixed-top px-4 shadow-sm">
            <div className="container justify-content-center">
                <a className="navbar-brand fw-bold me-5" href="#inicio">Dr. Jhonny Mujica</a>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul className="nav nav-pills navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#inicio"
                            style={{ color: "#131a36" }}>INICIO</a></li>
                        <li className="nav-item"><a className="nav-link" href="#servicios"
                            style={{ color: "#131a36" }}>SERVICIOS</a></li>
                        <li className="nav-item"><a className="nav-link" href="#sobre-mi"
                            style={{ color: "#131a36" }}>SOBRE MI</a></li>
                        <li className="nav-item"><a className="nav-link" href="#reserva"
                            style={{ color: "#131a36" }}>RESERVA</a></li>
                        <li className="nav-item"><a className="nav-link" href="#testimonios"
                            style={{ color: "#131a36" }}>TESTIMONIOS</a></li>

                        <button className="contacto-button btn ms-5">
                            <a href="https://wa.link/k958yl" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center gap-2 px-3 py-2">
                                CONTACTO
                            </a>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};