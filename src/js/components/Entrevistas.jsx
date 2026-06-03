import React from "react";

const entrevistas = [
    {
        id: "QayJH64hWMY",
        title: "Alimentación y Bienestar con Domingo Porras",
        medio: "La Tizana GV",
    },
    {
        id: "OdiAFJzZjNg",
        title: "Prevención y manejo del cáncer de mama",
        medio: "Globovisión",
    },
    {
        id: "41DL01uR2no",
        title: "El diagnostico precoz para lograr la cura del cáncer de mama",
        medio: "Globovisión",
    },
    {
        id: "hotdUwuYcdw",
        title: "Tu Médico en Casa Venezuela // Junto a el Dr. Jhonny Mujica",
        medio: "Tu Médico En Casa",
    },
];

export const Entrevistas = () => {
    return (
        <section id="entrevistas" className="section-entrevistas">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <span className="section-eyebrow">En los medios</span>
                    <h2 className="section-title">Entrevistas</h2>
                    <p className="section-subtitle">
                        Divulgando información médica de confianza
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {entrevistas.map((video, i) => (
                        <div className="col-lg-6" key={i}>
                            <div className="video-card">
                                {/* 16:9 embedded player */}
                                <div className="video-embed-wrapper">
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        referrerPolicy="strict-origin-when-cross-origin"
                                    />
                                </div>

                                <div className="video-card-body">
                                    <span className="video-tag">
                                        <i className="fa-brands fa-youtube"></i>
                                        Entrevista
                                    </span>
                                    <h3 className="video-title">{video.title}</h3>
                                    <p className="video-meta">
                                        <i className="fa-solid fa-tv me-1" style={{ fontSize: "0.7rem" }}></i>
                                        {video.medio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};