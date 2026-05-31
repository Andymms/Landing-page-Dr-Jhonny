import React from "react";

export const Testimonios = () => {
    return (
        <section id="testimonios" className="container-flex d-flex bg-light align-items-center my-5 p-5 flex-column">
            <h1 className="p-1" style={{ color: "#b476c0" }}>Testimonios</h1>
            <p className="mb-5 p-1 fs-5" style={{ color: "#131a36" }}>Lo que dicen mis pacientes</p>
            <div className="d-flex">
                <div className="mx-3 fs-5 servicios-burbuja rounded-5 bg-light d-flex flex-column p-5 align-items-center"
                    style={{ width: "500px" }} >
                    <p className="fst-italic" style={{ color: "#131a36" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                    <h4 className="mt-2 ms-auto" style={{ color: "#b476c0" }}>- Paciente 1</h4>
                </div>
                <div className="mx-3 fs-5 servicios-burbuja rounded-5 bg-light d-flex flex-column p-5 align-items-center"
                    style={{ width: "500px" }} >
                    <p className="fst-italic" style={{ color: "#131a36" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                    <h4 className="mt-2 ms-auto" style={{ color: "#b476c0" }}>- Paciente 1</h4>
                </div>
            </div>
            <div className="d-flex mt-5">
                <div className="mx-3 fs-5 servicios-burbuja rounded-5 bg-light d-flex flex-column p-5 align-items-center"
                    style={{ width: "500px" }} >
                    <p className="fst-italic" style={{ color: "#131a36" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                    <h4 className="mt-2 ms-auto" style={{ color: "#b476c0" }}>- Paciente 1</h4>
                </div>
                <div className="mx-3 fs-5 servicios-burbuja rounded-5 bg-light d-flex flex-column p-5 align-items-center"
                    style={{ width: "500px" }} >
                    <p className="fst-italic" style={{ color: "#131a36" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                    <h4 className="mt-2 ms-auto" style={{ color: "#b476c0" }}>- Paciente 1</h4>
                </div>
            </div>
        </section>
    );
};