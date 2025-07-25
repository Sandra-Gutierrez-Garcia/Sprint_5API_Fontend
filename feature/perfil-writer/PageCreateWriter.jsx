import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "../../styles/Form.css";
import { saveWriterToLocalStorage } from "../../utils/writerStorage";
import { setCurrentUser, getCurrentUser } from "../../utils/userStorage";

function PageCreateWriter() {
  const [success, setSuccess] = useState(false);
  const currentUser = getCurrentUser();
  const [form, setForm] = useState({
    username: currentUser?.username || "",
    bio: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    setForm(f => ({ ...f, username: currentUser?.username || "" }));
  }, [currentUser]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveWriterToLocalStorage({ username: currentUser?.username, bio: form.bio });
    setCurrentUser({ ...currentUser, writerProfile: true });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate("/perfil-writer");
    }, 1200);
    setForm({ username: currentUser?.username || "", bio: "" });
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
          <input type="text" name="username" placeholder="Usuario" className="input" value={form.username} disabled />
          <input type="text" name="bio" placeholder="Biografía corta" className="input" value={form.bio} onChange={handleChange} required />
          <button type="submit" className="btn">Crear escritor</button>
        </form>
        {success && (
          <p style={{ color: '#4a3c8c', marginTop: '18px', fontWeight: '600' }}>
            ¡Escritor creado exitosamente! Redirigiendo al perfil...
          </p>
        )}
      </section>
    </div>
  );
}

export default PageCreateWriter;
