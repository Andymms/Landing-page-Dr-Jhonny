import React from "react";

export const Jumbotron = () => {
    return (
        <section id="inicio" className="jumbotron-section">
            {/* Background orbs */}
            <div className="jumbotron-bg-orb jumbotron-bg-orb-1"></div>
            <div className="jumbotron-bg-orb jumbotron-bg-orb-2"></div>

            <div className="container jumbotron-container">
                {/* Text content */}
                <div className="jumbotron-content">
                    <div className="jumbotron-badge">
                        <i className="fa-solid fa-ribbon"></i>
                        Mastología
                    </div>

                    <h1 className="jumbotron-title">Dr. Jhonny Mujica</h1>
                    <h2 className="jumbotron-subtitle">Cirujano Mastólogo</h2>

                    <p className="jumbotron-location">
                        <i className="fa-solid fa-location-dot"></i> Caracas, Venezuela
                    </p>

                    <p className="jumbotron-text">
                        Comprometido con el manejo personalizado y el diagnóstico
                        preciso del cáncer de mama — porque cada paciente merece
                        un médico que esté presente, que escuche y que la acompañe en cada paso.
                    </p>

                    <div className="jumbotron-actions">
                        <a href="#reserva" className="btn-primary-custom">
                            Reservar consulta
                        </a>
                        <a href="#sobre-mi" className="btn-secondary-custom">
                            Conocer más
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="jumbotron-image-wrapper">
                    <div className="jumbotron-image-frame">
                        <img
                            src="/img/DrMujica.jpg"
                            alt="Dr. Jhonny Mujica"
                            className="jumbotron-image"
                            fetchPriority="high"
                        />
                    </div>

                    {/* Floating stat badges */}
                    <div className="jumbotron-stat-badge stat-badge-1">
                        <span className="stat-number">+30</span>
                        <span className="stat-label">Años de experiencia</span>
                    </div>
                    <div className="jumbotron-stat-badge stat-badge-2">
                        <span className="stat-number">+5000</span>
                        <span className="stat-label">Pacientes atendidos</span>
                    </div>
                </div>
            </div>
        </section>
    );
};