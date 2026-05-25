import React, { useEffect } from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { SobreMi } from "./SobreMi.jsx";

export const Home = () => {
    useEffect(() => {
        const spyElement = document.querySelector('[data-bs-spy="scroll"]');

        if (spyElement) {
            const bootstrap = window.bootstrap;
            if (bootstrap && bootstrap.Scroll) {
                new bootstrap.Scroll(spyElement, { target: "#navbar" });
            }
        }
    }, []);

    return (
        <div className="min-vh-100 bg-light">
            <Navbar />

            {/* scrollable layout container */}
            <div
                data-bs-spy="scroll"
                data-bs-target="#navbar"
                data-bs-root-margin="0px 0px -40%"
                data-bs-smooth-scroll="true"
                style={{
                    paddingTop: "70px",
                    position: "relative",
                    height: "100vh",
                    overflowY: "scroll",
                    backgroundColor: "aliceblue",
                }}
                tabIndex="0"
            >

                {/* Sections here */}
                <Jumbotron />
                <SobreMi />
            </div>
        </div>
    );
};