import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Form.css";
import { saveWriterToLocalStorage } from "../utils/writerStorage";

function PageCreateWriter() {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    username: "",
    bio: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveWriterToLocalStorage(form);
    setSuccess(true);
    setForm({ username: "", bio: "" });
    setTimeout(() => setSuccess(false), 1500);
  }

  return (
    <div className="loginpage-new">
      <Header />
      <section className="top-book-banner">
        <div className="top-book-info">
          <h2>¡Motívate a ser escritor!</h2>
          <p className="top-book-title">
            Regístrate como escritor y comienza a compartir tus historias con la comunidad.
          </p>
        </div>
      </section>
      <section className="form-section">
        <h2 className="form-title">Datos del escritor</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Usuario" className="input" value={form.username} onChange={handleChange} required />
          <input type="text" name="bio" placeholder="Biografía corta" className="input" value={form.bio} onChange={handleChange} required />
          <button type="submit" className="btn">Crear escritor</button>
        </form>
        {success && (
          <p style={{ color: '#4a3c8c', marginTop: '18px', fontWeight: '600' }}>
            ¡Escritor creado exitosamente!
          </p>
        )}
      </section>
    </div>
  );
}

export default PageCreateWriter;
