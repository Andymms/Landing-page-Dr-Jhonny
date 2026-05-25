import React from "react";

export const Jumbotron = () => {
    return (
        <div className="container-flex d-flex justify-content-center jumbotron my-5">
            <div className="d-flex container">
                <div className="container align-self-center">
                    <h1 className=""> DR. Jhonny Mujica: Cirujano Mastologo </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Sunt voluptates deleniti libero. Similique modi vero, sunt,
                        assumenda minima aliquam, voluptatum excepturi repellendus
                        commodi iusto debitis tempore ullam! Rem, quod exercitationem
                    </p>
                </div>
                <img src="https://placehold.co/400x500" alt="DR image" className="m-5" />
            </div>
        </div>
    );
};