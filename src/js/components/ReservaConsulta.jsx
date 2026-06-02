import React from "react";

export const ReservaConsulta = () => {
    return (
        <section id="reserva" className="section-reserva">
            <div className="container">
                <div className="reserva-card">
                    {/* Decorative orbs */}
                    <div className="reserva-orb reserva-orb-1"></div>
                    <div className="reserva-orb reserva-orb-2"></div>

                    <div className="row align-items-center position-relative">
                        <div className="col-lg-8">
                            <span className="section-eyebrow-light">¿Listo para comenzar?</span>
                            <h2 className="reserva-title">Reserva tu turno ahora</h2>
                            <p className="reserva-desc">
                                Consulta personalizada con atención médica online o presencial.
                                Tu salud es nuestra prioridad.
                            </p>
                        </div>

                        <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <a
                                className="btn-whatsapp"
                                href="https://wa.link/k958yl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-whatsapp btn-whatsapp-icon"></i>
                                <span>Consultar por WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};