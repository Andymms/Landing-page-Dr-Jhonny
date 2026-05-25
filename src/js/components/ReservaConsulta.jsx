import React from "react";

export const ReservaConsulta = () => {
    return (
        <section id="reserva" className="d-flex justify-content-center my-5">
            <div className="container-flex align-items-center mx-5">
                <div className="reserva-burbuja rounded-5 bg-light d-flex flex-column p-5 align-items-center" style={{ width: "700px" }} >
                    <h1 className="">Reserva tu turno ahora</h1>
                    <p>Consulta personalizada con atención médica online o presencial y de confianza</p>
                    <button className="btn btn-outline-light"> <i className="fa-brands fa-whatsapp"></i> Consulta</button>
                </div>
            </div>
        </section>
    );
};