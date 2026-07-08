import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "../lib/supabase";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const BlogList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading]   = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await supabase
                .from("articles")
                .select("id, title, slug, excerpt, created_at")
                .eq("published", true)
                .order("created_at", { ascending: false });
            setArticles(data || []);
            setLoading(false);
        };
        fetch();
    }, []);

    const fmt = (d) =>
        new Date(d).toLocaleDateString("es-VE", {
            year: "numeric", month: "long", day: "numeric",
        });

    return (
        <>
            <Helmet>
                <title>Blog · Dr. Jhonny Mujica — Mastólogo en Caracas</title>
                <meta
                    name="description"
                    content="Artículos sobre salud mamaria, cáncer de mama, diagnóstico y prevención por el Dr. Jhonny Mujica, cirujano mastólogo en Caracas, Venezuela."
                />
            </Helmet>

            <Navbar />

            <main style={{ paddingTop: "80px" }}>
                <section className="section-blog-list">
                    <div className="container">
                        {/* Header */}
                        <div className="text-center mb-5">
                            <span className="section-eyebrow">RECURSOS Y ARTÍCULOS</span>
                            <h1 className="section-title">Tu guía de salud mamaria</h1>
                            <p className="section-subtitle">
                                Información médica de confianza para cuidar tu salud
                            </p>
                        </div>

                        {loading ? (
                            <div className="blog-spinner-wrap">
                                <div
                                    className="spinner-border"
                                    style={{ color: "var(--purple)" }}
                                    role="status"
                                >
                                    <span className="visually-hidden">Cargando...</span>
                                </div>
                            </div>
                        ) : articles.length === 0 ? (
                            <p className="blog-empty">
                                Próximamente — artículos sobre salud mamaria.
                            </p>
                        ) : (
                            <div className="row g-4">
                                {articles.map((art) => (
                                    <div className="col-lg-4 col-md-6" key={art.id}>
                                        <Link to={`/blog/${art.slug}`} className="blog-card-link">
                                            <article className="blog-card">
                                                <p className="blog-card-date">
                                                    <i className="fa-regular fa-calendar"></i>
                                                    &nbsp;{fmt(art.created_at)}
                                                </p>
                                                <h2 className="blog-card-title">{art.title}</h2>
                                                <p className="blog-card-excerpt">{art.excerpt}</p>
                                                <span className="blog-card-cta">
                                                    Leer artículo&nbsp;
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </article>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};
