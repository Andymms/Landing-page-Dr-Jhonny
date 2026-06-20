import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // On sub-routes (blog, admin) anchor links need the full path prefix
    const a = (hash) => isHome ? hash : `/${hash}`;

    return (
        <nav className={`navbar navbar-expand-lg fixed-top px-4 nav-custom ${scrolled ? "nav-scrolled" : ""}`}>
            <div className="container">
                <a className="navbar-brand nav-brand" href={a("#inicio")}>
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
                            <a className="nav-link nav-link-custom" href={a("#inicio")}>INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href={a("#servicios")}>SERVICIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href={a("#sobre-mi")}>SOBRE MÍ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href={a("#reserva")}>PEDIR CITA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href={a("#testimonios")}>TESTIMONIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href={a("#entrevistas")}>ENTREVISTAS</a>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link nav-link-custom ${pathname.startsWith("/blog") ? "nav-link-blog-active" : ""}`}
                                to="/blog"
                            >
                                BLOG
                            </Link>
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
