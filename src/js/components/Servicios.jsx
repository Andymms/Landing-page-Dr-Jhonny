import React from "react";

const servicios = [
    {
        image: "/img/Consulta.jpg",
        alt: "Consulta médica",
        title: "Consulta",
        description:
            "Personalizada con atención médica online o presencial, brindando confianza en cada paso.",
    },
    {
        image: "/img/biopsia.jpg",
        alt: "Biopsia de mama",
        title: "Biopsia de mama",
        description:
            "Diagnóstico preciso mediante procedimientos seguros y especializados de última generación.",
    },
    {
        image: "/img/cirugia.jpg",
        alt: "Cirugía de tumores mamarios",
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
                                <div className="servicio-image-wrapper">
                                    <img
                                        src={s.image}
                                        alt={s.alt}
                                        className="servicio-image"
                                        loading="lazy"
                                    />
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