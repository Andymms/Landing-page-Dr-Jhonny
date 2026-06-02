import React from "react";
const servicios = [
    {
        icon: "fa-solid fa-laptop-medical",
        color: "#b476c0",
        bg: "rgba(180, 118, 192, 0.1)",
        title: "Consulta",
        description:
            "Personalizada con atención médica online o presencial, brindando confianza en cada paso.",
    },
    {
        icon: "fa-solid fa-vial",
        color: "#0d9249",
        bg: "rgba(13, 146, 73, 0.1)",
        title: "Biopsia de mama",
        description:
            "Diagnóstico preciso mediante procedimientos seguros y especializados de última generación.",
    },
    {
        icon: "fa-solid fa-scissors",
        color: "#4a7fd4",
        bg: "rgba(74, 127, 212, 0.1)",
        title: "Cirugía de tumores mamarios",
        description:
            "Procedimientos quirúrgicos especializados realizados con los más altos estándares de calidad.",
    },
];

export const Servicios = () => {
    return (
        <section id="servicios" className="section-servicios">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <span className="section-eyebrow">Lo que ofrezco</span>
                    <h2 className="section-title">Servicios Especializados</h2>
                </div>

                <div className="row g-4 justify-content-center">
                    {servicios.map((s, i) => (
                        <div className="col-lg-4 col-md-6" key={i}>
                            <div className="servicio-card">
                                <div
                                    className="servicio-icon"
                                    style={{ backgroundColor: s.bg }}
                                >
                                    <i className={s.icon} style={{ color: s.color }}></i>
                                </div>
                                <h3 className="servicio-title">{s.title}</h3>
                                <p className="servicio-desc">{s.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
