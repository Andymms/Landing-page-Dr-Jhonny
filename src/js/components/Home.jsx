import React, { useEffect } from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { SobreMi } from "./SobreMi.jsx";
import { ReservaConsulta } from "./ReservaConsulta.jsx";
import { Servicios } from "./Servicios.jsx";
import { Testimonios } from "./Testimonios.jsx";
import { Entrevistas } from "./Entrevistas.jsx";
import { Footer } from "./Footer.jsx";

export const Home = () => {
    return (
        <div className="min-vh-100 bg-light">

            <Navbar />

            <main>
                <Jumbotron />
                <Servicios />
                <SobreMi />
                <ReservaConsulta />
                <Testimonios />
                <Entrevistas />

            </main>

            <Footer />

        </div>
    );
};