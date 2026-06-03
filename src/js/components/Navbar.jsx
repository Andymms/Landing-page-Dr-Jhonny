import React from "react";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top px-4 nav-custom ${scrolled ? "nav-scrolled" : ""}`}>
            <div className="container">
                <a className="navbar-brand nav-brand" href="#inicio">
                    <span className="brand-dr">Dr.</span> Jhonny Mujica
                </a>

                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul className="navbar-nav align-items-center gap-1 mt-3 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#inicio">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#servicios">SERVICIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#sobre-mi">SOBRE MÍ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#reserva">PEDIR CITA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#testimonios">TESTIMONIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#entrevistas">ENTREVISTAS</a>
                        </li>
                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <a
                                href="https://wa.link/k958yl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contacto-button"
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                                CONTACTO
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};