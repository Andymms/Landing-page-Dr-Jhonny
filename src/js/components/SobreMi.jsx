import React from "react";

export const SobreMi = () => {
    return (
        <section id="sobre-mi" className="container-flex d-flex bg-light justify-content-center my-5">
            <div className="d-flex container">
                <img src="https://placehold.co/400x500" alt="DR image" className="m-5" />
                <div className="container align-self-center">
                    <h1 style={{ color: "#131a36" }}> Sobre Mi </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Sunt voluptates deleniti libero. Similique modi vero, sunt,
                        assumenda minima aliquam, voluptatum excepturi repellendus
                        commodi iusto debitis tempore ullam! Rem, quod exercitationem
                    </p>
                </div>
            </div>
        </section>
    );
};