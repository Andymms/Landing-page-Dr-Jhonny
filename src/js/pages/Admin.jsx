import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "../lib/supabase";

// Auto-generate URL slug from Spanish title
const toSlug = (title) =>
    title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

const EMPTY = { title: "", slug: "", excerpt: "", content: "", published: false };

export const Admin = () => {
    const [session,    setSession]    = useState(null);
    const [authReady,  setAuthReady]  = useState(false);

    // Login form state
    const [email,      setEmail]      = useState("");
    const [password,   setPassword]   = useState("");
    const [loginErr,   setLoginErr]   = useState("");
    const [loggingIn,  setLoggingIn]  = useState(false);

    // Dashboard state
    const [articles,   setArticles]   = useState([]);
    const [form,       setForm]       = useState(EMPTY);
    const [editingId,  setEditingId]  = useState(null);
    const [showForm,   setShowForm]   = useState(false);
    const [saving,     setSaving]     = useState(false);
    const [toast,      setToast]      = useState("");

    // ── Auth ────────────────────────────────────────────────
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setAuthReady(true);
        });
        const { data: listener } = supabase.auth.onAuthStateChange((_, s) => setSession(s));
        return () => listener.subscription.unsubscribe();
    }, []);

    useEffect(() => {
        if (session) loadArticles();
    }, [session]);

    // ── Data ────────────────────────────────────────────────
    const loadArticles = async () => {
        const { data } = await supabase
            .from("articles")
            .select("id, title, slug, published, created_at")
            .order("created_at", { ascending: false });
        setArticles(data || []);
    };

    // ── Handlers ────────────────────────────────────────────
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoggingIn(true);
        setLoginErr("");
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setLoginErr("Correo o contraseña incorrectos.");
        setLoggingIn(false);
    };

    const handleLogout = () => supabase.auth.signOut();

    const handleTitleChange = (val) => {
        setForm((f) => ({
            ...f,
            title: val,
            // Auto-fill slug only when creating a new article
            slug: editingId ? f.slug : toSlug(val),
        }));
    };

    const notify = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(""), 4000);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        const payload = {
            title:      form.title,
            slug:       form.slug,
            excerpt:    form.excerpt,
            content:    form.content,
            published:  form.published,
            updated_at: new Date().toISOString(),
        };
        const { error } = editingId
            ? await supabase.from("articles").update(payload).eq("id", editingId)
            : await supabase.from("articles").insert([payload]);

        setSaving(false);
        if (error) {
            notify("Error al guardar: " + error.message);
        } else {
            notify(editingId ? "Artículo actualizado." : "Artículo publicado.");
            closeForm();
            loadArticles();
        }
    };

    const openEdit = async (id) => {
        const { data } = await supabase.from("articles").select("*").eq("id", id).single();
        if (data) {
            setForm({ title: data.title, slug: data.slug, excerpt: data.excerpt, content: data.content, published: data.published });
            setEditingId(id);
            setShowForm(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleDelete = async (id, title) => {
        if (!window.confirm(`¿Eliminar "${title}"? Esta acción no se puede deshacer.`)) return;
        await supabase.from("articles").delete().eq("id", id);
        notify("Artículo eliminado.");
        loadArticles();
    };

    const closeForm = () => {
        setShowForm(false);
        setEditingId(null);
        setForm(EMPTY);
    };

    const fmt = (d) =>
        new Date(d).toLocaleDateString("es-VE", { year: "numeric", month: "short", day: "numeric" });

    // ── Loading ─────────────────────────────────────────────
    if (!authReady) return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div className="spinner-border" style={{ color: "var(--purple)" }} role="status" />
        </div>
    );

    // ── Login screen ─────────────────────────────────────────
    if (!session) return (
        <>
            <Helmet><title>Acceso · Dr. Jhonny Mujica</title></Helmet>
            <div className="admin-login-wrap">
                <div className="admin-login-card">
                    <div className="admin-login-brand">
                        <span style={{ color: "var(--purple)" }}>Dr.</span> Jhonny Mujica
                    </div>
                    <p className="admin-login-sub">Panel de administración</p>

                    <form onSubmit={handleLogin}>
                        <div className="adm-field">
                            <label>Correo electrónico</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="doctor@ejemplo.com"
                                required
                                autoComplete="email"
                            />
                        </div>
                        <div className="adm-field">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        {loginErr && <p className="adm-error">{loginErr}</p>}

                        <button type="submit" className="adm-btn-primary adm-btn-full" disabled={loggingIn}>
                            {loggingIn ? "Entrando…" : "Entrar"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );

    // ── Dashboard ────────────────────────────────────────────
    return (
        <>
            <Helmet><title>Panel · Dr. Jhonny Mujica</title></Helmet>
            <div className="adm-wrap">

                {/* Top bar */}
                <header className="adm-header">
                    <span className="adm-header-brand">
                        <span style={{ color: "var(--purple)" }}>Dr.</span> Jhonny Mujica — Blog
                    </span>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                        <a href="/" className="adm-btn-ghost adm-btn-sm">← Ver sitio</a>
                        <button onClick={handleLogout} className="adm-btn-ghost adm-btn-sm">
                            Cerrar sesión
                        </button>
                    </div>
                </header>

                <div className="adm-body">
                    {/* Toast */}
                    {toast && <div className="adm-toast">{toast}</div>}

                    {/* ── Article form ── */}
                    {showForm && (
                        <div className="adm-card" style={{ marginBottom: "2rem" }}>
                            <h2 className="adm-card-title">
                                {editingId ? "Editar artículo" : "Nuevo artículo"}
                            </h2>

                            <form onSubmit={handleSave}>
                                <div className="adm-field">
                                    <label>Título</label>
                                    <input
                                        type="text"
                                        value={form.title}
                                        onChange={(e) => handleTitleChange(e.target.value)}
                                        placeholder="Ej: ¿Cuándo debo hacerme mi primer chequeo mamario?"
                                        required
                                    />
                                </div>

                                <div className="adm-field">
                                    <label>Slug (URL del artículo)</label>
                                    <input
                                        type="text"
                                        value={form.slug}
                                        onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                                        placeholder="cuando-hacerse-primer-chequeo"
                                        required
                                    />
                                    <small className="adm-hint">
                                        URL pública: <code>/blog/{form.slug || "slug-del-articulo"}</code>
                                    </small>
                                </div>

                                <div className="adm-field">
                                    <label>Descripción corta <span className="adm-hint-inline">(aparece en la tarjeta del blog)</span></label>
                                    <textarea
                                        value={form.excerpt}
                                        onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                                        placeholder="Una o dos frases que resumen el artículo…"
                                        rows={2}
                                        required
                                    />
                                </div>

                                <div className="adm-field">
                                    <label>
                                        Contenido
                                        <span className="adm-hint-inline"> — escribe con Markdown:
                                            <code> ## Título</code>,
                                            <code> **negrita**</code>,
                                            <code> _cursiva_</code>, líneas en blanco entre párrafos
                                        </span>
                                    </label>
                                    <textarea
                                        className="adm-content-editor"
                                        value={form.content}
                                        onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                                        placeholder={`## Introducción\n\nA partir de los 40 años, toda mujer debería…\n\n## ¿Y si tengo antecedentes familiares?\n\nEn ese caso, la recomendación cambia…`}
                                        rows={20}
                                        required
                                    />
                                </div>

                                <div className="adm-field adm-field-inline">
                                    <label className="adm-checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={form.published}
                                            onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))}
                                        />
                                        <span>Publicar ahora <span className="adm-hint-inline">(visible al público)</span></span>
                                    </label>
                                </div>

                                <div className="adm-form-actions">
                                    <button type="submit" className="adm-btn-primary" disabled={saving}>
                                        {saving ? "Guardando…" : editingId ? "Guardar cambios" : "Publicar artículo"}
                                    </button>
                                    <button type="button" className="adm-btn-ghost" onClick={closeForm}>
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* ── Articles list ── */}
                    {!showForm && (
                        <>
                            <div className="adm-list-header">
                                <h2 className="adm-card-title" style={{ margin: 0 }}>
                                    Artículos ({articles.length})
                                </h2>
                                <button className="adm-btn-primary" onClick={() => setShowForm(true)}>
                                    + Nuevo artículo
                                </button>
                            </div>

                            {articles.length === 0 ? (
                                <div className="adm-empty">
                                    <p>No hay artículos todavía.</p>
                                    <button className="adm-btn-primary" onClick={() => setShowForm(true)}>
                                        Crear el primero
                                    </button>
                                </div>
                            ) : (
                                <div className="adm-card">
                                    {articles.map((art, i) => (
                                        <div
                                            key={art.id}
                                            className="adm-article-row"
                                            style={{ borderTop: i > 0 ? "1px solid rgba(19,26,54,0.08)" : "none" }}
                                        >
                                            <div className="adm-article-info">
                                                <span className={`adm-badge ${art.published ? "adm-badge-live" : "adm-badge-draft"}`}>
                                                    {art.published ? "Publicado" : "Borrador"}
                                                </span>
                                                <span className="adm-article-title">{art.title}</span>
                                                <span className="adm-article-date">{fmt(art.created_at)}</span>
                                            </div>
                                            <div className="adm-article-actions">
                                                {art.published && (
                                                    <a
                                                        href={`/blog/${art.slug}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="adm-btn-ghost adm-btn-sm"
                                                    >
                                                        Ver
                                                    </a>
                                                )}
                                                <button
                                                    className="adm-btn-ghost adm-btn-sm"
                                                    onClick={() => openEdit(art.id)}
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    className="adm-btn-danger adm-btn-sm"
                                                    onClick={() => handleDelete(art.id, art.title)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
