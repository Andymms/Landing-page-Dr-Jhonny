import React, { useEffect } from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { SobreMi } from "./SobreMi.jsx";
import { ReservaConsulta } from "./ReservaConsulta.jsx";
import { Servicios } from "./Servicios.jsx";

export const Home = () => {
    return (
        <div className="min-vh-100 bg-light">
            <Navbar />

            <main>
                <Jumbotron />
                <Servicios />
                <SobreMi />
                <ReservaConsulta />
            </main>

        </div>
    );
};