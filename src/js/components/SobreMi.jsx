import React from "react";

export const SobreMi = () => {
    return (
        <section id="sobre-mi" className="section-sobre-mi">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Image column */}
                    <div className="col-lg-5 d-flex justify-content-center">
                        <div className="sobre-mi-image-wrapper">
                            <img
                                src="/img/SobreMi.jpg"
                                alt="Dr. Jhonny Mujica"
                                className="sobre-mi-image"
                            />
                            <p className="photo-leyend"> Conferencia XVII Congreso Venezolano de Mastología</p>
                        </div>
                    </div>

                    {/* Text column */}
                    <div className="col-lg-7">
                        <span className="section-eyebrow">Conóceme</span>
                        <h2 className="section-title">Sobre Mí</h2>

                        <p className="sobre-mi-text">
                            La Mastología moderna exige un enfoque personalizado — y ese es
                            exactamente el compromiso que asumo con cada paciente. <br /> <br />
                            Con más de 15 años dedicados exclusivamente al diagnóstico y
                            tratamiento de enfermedades benignas y cáncer de mama,
                            combino formación de élite con un trato cercano e individualizado. <br /> <br />
                            Me formé en la Universidad Central de Venezuela y realicé el Máster
                            en Senología y Patología Mamaria en la Universidad de Barcelona, España,
                            el cual incluyó pasantías en el Hospital Clinic de Barcelona, Hospital Clínico
                            de Madrid y el Instituto Europeo de Oncología (IEO), todas ellas
                            instituciones de referencia mundial en la especialidad.  <br /> <br />
                            Hoy ejerzo en Caracas con un único objetivo: que cada paciente reciba
                            el diagnóstico más preciso y el tratamiento individualizado más avanzado disponible.
                        </p>

                        <div className="sobre-mi-stats">
                            <div className="stat-item">
                                <span className="stat-num">+30</span>
                                <span className="stat-lab">Años de experiencia</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-num">+5000</span>
                                <span className="stat-lab">Pacientes atendidos</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-num">100%</span>
                                <span className="stat-lab">Compromiso</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};