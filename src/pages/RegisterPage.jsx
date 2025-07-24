import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Form.css";
import { saveUserToLocalStorage } from "../utils/userStorage";

function RegisterPage() {
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const user = {
			username: form[0].value,
			email: form[1].value,
			password: form[2].value
		};
		saveUserToLocalStorage(user);
		setSuccess(true);
		form.reset();
		setTimeout(() => {
			navigate("/login");
		}, 1200);
	}

	return (
		<div className="registerpage-new">
			<Header />
			<section className="top-book-banner">
				<div className="top-book-info">
					<h2>¡Únete y vive la experiencia lectora!</h2>
					<p className="top-book-title">
						Regístrate para descubrir libros y conocer a otros usuarios que
						comparten sus historias.
					</p>
				</div>
			</section>
			<section className="form-section">
				<h2 className="form-title">Crea tu cuenta</h2>
				<form className="form" onSubmit={handleSubmit}>
					<input type="text" placeholder="Usuario" className="input" required />
					<input type="email" placeholder="Email" className="input" required />
					<input type="password" placeholder="Contraseña" className="input" required />
					<button type="submit" className="btn">Registrarse</button>
				</form>
				{success && (
					<p style={{ color: '#4a3c8c', marginTop: '18px', fontWeight: '600' }}>
						¡Registro exitoso! Redirigiendo a login...
					</p>
				)}
			</section>
		</div>
	);
}

export default RegisterPage;
