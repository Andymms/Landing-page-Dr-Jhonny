import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { marked } from "marked";
import { supabase } from "../lib/supabase";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Configure marked for safe output
marked.setOptions({ breaks: true, gfm: true });

export const BlogPost = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const { data, error } = await supabase
                .from("articles")
                .select("*")
                .eq("slug", slug)
                .eq("published", true)
                .single();

            if (error || !data) setNotFound(true);
            else setArticle(data);
            setLoading(false);
        };
        fetch();
    }, [slug]);

    const fmt = (d) =>
        new Date(d).toLocaleDateString("es-VE", {
            year: "numeric", month: "long", day: "numeric",
        });

    if (loading) return (
        <>
            <Navbar />
            <div className="blog-spinner-wrap" style={{ paddingTop: "140px" }}>
                <div className="spinner-border" style={{ color: "var(--purple)" }} role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        </>
    );

    if (notFound) return (
        <>
            <Helmet><title>Artículo no encontrado · Dr. Jhonny Mujica</title></Helmet>
            <Navbar />
            <div className="container text-center" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
                <p className="section-eyebrow">404</p>
                <h2 className="section-title">Artículo no encontrado</h2>
                <Link to="/blog" className="btn-primary-custom" style={{ marginTop: "1.5rem" }}>
                    ← Volver al blog
                </Link>
            </div>
            <Footer />
        </>
    );

    return (
        <>
            <Helmet>
                <title>{article.title} · Dr. Jhonny Mujica</title>
                <meta name="description" content={article.excerpt} />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={article.created_at} />
                <meta property="article:author" content="Dr. Jhonny Mujica" />
            </Helmet>

            <Navbar />

            <main style={{ paddingTop: "80px" }}>
                <article className="section-blog-post">
                    <div className="container">
                        <div className="blog-post-inner">
                            {/* Back link */}
                            <Link to="/blog" className="blog-back-link">
                                <i className="fa-solid fa-arrow-left"></i> Volver al blog
                            </Link>

                            {/* Header */}
                            <header className="blog-post-header">
                                <span className="section-eyebrow">Salud mamaria</span>
                                <h1 className="blog-post-title">{article.title}</h1>
                                <p className="blog-post-byline">
                                    <i className="fa-regular fa-calendar"></i>
                                    &nbsp;{fmt(article.created_at)}
                                    &nbsp;·&nbsp;
                                    <strong>Dr. Jhonny Mujica</strong>
                                    &nbsp;· Cirujano Mastólogo
                                </p>
                            </header>

                            {/* Content */}
                            <div
                                className="blog-post-content"
                                dangerouslySetInnerHTML={{ __html: marked.parse(article.content) }}
                            />

                            {/* CTA */}
                            <div className="blog-post-cta">
                                <div className="blog-post-cta-inner">
                                    <p className="blog-post-cta-label">¿Tienes dudas sobre tu salud mamaria?</p>
                                    <h3 className="blog-post-cta-title">Agenda una consulta personalizada</h3>
                                    <p className="blog-post-cta-sub">
                                        Atención presencial en Caracas o en línea — con el mismo nivel de detalle y dedicación.
                                    </p>
                                    <a href="https://wa.link/k958yl" className="btn-whatsapp" style={{ display: "inline-flex" }}>
                                        <i className="fa-brands fa-whatsapp btn-whatsapp-icon"></i>
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </>
    );
};
