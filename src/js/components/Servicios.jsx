import React from "react";

export const Servicios = () => {
    return (
        <section id="servicios" className="container-flex bg-light d-flex align-items-center my-5 flex-column">
            <h1 className="mb-5 p-2" style={{ color: "#131a36" }}>Servicios Especializados</h1>
            <div className="d-flex align-items-stretch">
                <div className="mx-3 servicios-burbuja rounded-5 d-flex flex-column p-5 align-items-center" style={{ width: "300px" }} >
                    <i className="fa-solid fa-laptop-medical" style={{ color: "#b476c0", fontSize: "3rem" }}></i>
                    <h1 className="">Consulta</h1>
                    <p className="justify-content">Personalizada con atención médica online o presencial y de confianza</p>
                </div>
                <div className="mx-3 servicios-burbuja rounded-5 d-flex flex-column p-5 align-items-center" style={{ width: "300px" }} >
                    <i className="fa-solid fa-vial" style={{ color: "#0d9249", fontSize: "3rem" }}></i>
                    <h1 className="">Biopsia de mama</h1>
                    <p className="justify-content">Diagnóstico preciso y tratamiento adecuado</p>
                </div>
                <div className="mx-3 servicios-burbuja rounded-5 d-flex flex-column p-5 align-items-center" style={{ width: "300px" }} >
                    <i className="fa-solid fa-scissors" style={{ color: "#969696", fontSize: "3rem" }}></i>
                    <h1 className="">Cirugía de tumores mamarios</h1>
                    <p className="justify-content">Procedimientos quirúrgicos especializados de confianza</p>
                </div>
            </div>
        </section>
    );
};