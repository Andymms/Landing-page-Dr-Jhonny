import React from "react";

const testimonios = [
    {
        text: "Excelente atención y un trato muy profesional. Me explicó todo con claridad y me sentí muy segura desde el primer momento.",
        name: "María G.",
        stars: 5,
    },
    {
        text: "El Dr. Mujica me acompañó en cada etapa del proceso con mucha paciencia. No podría haber estado en mejores manos.",
        name: "Ana P.",
        stars: 5,
    },
    {
        text: "Muy profesional y atento. El diagnóstico fue preciso y el seguimiento post-operatorio fue impecable.",
        name: "Carmen R.",
        stars: 5,
    },
    {
        text: "Recomiendo ampliamente al Dr. Mujica. Transmite mucha confianza y seguridad en cada consulta.",
        name: "Laura M.",
        stars: 5,
    },
];

export const Testimonios = () => {
    return (
        <section id="testimonios" className="section-testimonios">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <span className="section-eyebrow">Opiniones</span>
                    <h2 className="section-title" style={{ color: "#b476c0" }}>
                        Testimonios
                    </h2>
                    <p className="section-subtitle">Lo que dicen mis pacientes</p>
                </div>

                <div className="row g-4">
                    {testimonios.map((t, i) => (
                        <div className="col-lg-6" key={i}>
                            <div className="testimonio-card">
                                <span className="testimonio-quote-mark">"</span>

                                <div className="testimonio-stars">
                                    {[...Array(t.stars)].map((_, si) => (
                                        <i
                                            key={si}
                                            className="fa-solid fa-star"
                                            style={{ color: "#f4b942" }}
                                        ></i>
                                    ))}
                                </div>

                                <p className="testimonio-text">{t.text}</p>
                                <p className="testimonio-author">— {t.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
