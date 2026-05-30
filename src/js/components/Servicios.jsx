import React from "react";

export const Servicios = () => {
    return (
        <section id="servicios" className="container-flex d-flex align-items-center my-5 flex-column">
            <h1 className="mb-5 p-2" style={{ color: "#0447ac" }}>Servicios Especializados</h1>
            <div className="d-flex">
                <div className="mx-3 servicios-burbuja rounded-5 bg-light d-flex flex-column p-5 align-items-center" style={{ width: "300px" }} >
                    <h1 className="">Consulta</h1>
                    <p>Consulta personalizada con atención médica online o presencial y de confianza</p>
                </div>
                <div className="mx-3 servicios-burbuja rounded-5 bg-light d-flex flex-column p-5 align-items-center" style={{ width: "300px" }} >
                    <h1 className="">Biopsia de mama</h1>
                    <p>Consulta personalizada con atención médica online o presencial y de confianza</p>
                </div>
                <div className="mx-3 servicios-burbuja rounded-5 bg-light d-flex flex-column p-5 align-items-center" style={{ width: "300px" }} >
                    <h1 className="">Cirugía de tumores mamarios</h1>
                    <p>Consulta personalizada con atención médica online o presencial y de confianza</p>
                </div>
            </div>
        </section>
    );
};