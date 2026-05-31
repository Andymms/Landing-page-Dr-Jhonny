import React from "react";

export const ReservaConsulta = () => {
    return (
        <section id="reserva" className="d-flex justify-content-center my-5">
            <div className="container-flex align-items-center mx-5">
                <div className="reserva-burbuja rounded-5 bg-light d-flex flex-column p-5 align-items-center" style={{ width: "900px" }} >
                    <h1 className="">Reserva tu turno ahora</h1>
                    <p>Consulta personalizada con atención médica online o presencial y de confianza</p>
                    <a
                        className="btn btn-success btn-lg d-inline-flex align-items-center gap-2 px-4 py-2 text-white"
                        href="https://wa.link/k958yl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-whatsapp fs-4"></i>
                        <span>Consulta</span>
                    </a>
                </div>
            </div>
        </section>
    );
};