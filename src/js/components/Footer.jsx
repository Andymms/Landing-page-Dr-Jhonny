import React from "react";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-bottom">
                <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
                    <p className="footer-copy">
                        © {year} Dr. Jhonny Mujica · Todos los derechos reservados
                    </p>
                    <p className="footer-copy">
                        Diseñado con <i className="fa-solid fa-heart" style={{ color: "#b476c0", fontSize: "0.7rem" }}></i> para la salud
                    </p>
                </div>
            </div>
        </footer>
    );
};
