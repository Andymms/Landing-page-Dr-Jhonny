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
                                src="https://placehold.co/400x500"
                                alt="Dr. Jhonny Mujica"
                                className="sobre-mi-image"
                            />
                            <div className="sobre-mi-credential">
                                <i className="fa-solid fa-award sobre-mi-credential-icon"></i>
                                <div>
                                    <strong>Certificado</strong>
                                    <small>Mastólogo certificado</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text column */}
                    <div className="col-lg-7">
                        <span className="section-eyebrow">Conóceme</span>
                        <h2 className="section-title">Sobre Mí</h2>

                        <p className="sobre-mi-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Sunt voluptates deleniti libero. Similique modi vero, sunt,
                            assumenda minima aliquam, voluptatum excepturi repellendus
                            commodi iusto debitis tempore ullam! Rem, quod exercitationem.
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