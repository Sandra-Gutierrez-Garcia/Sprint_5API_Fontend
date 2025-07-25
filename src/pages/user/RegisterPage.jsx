import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header';
import '../../styles/user/RegisterPage.css';
import { handleRegisterSubmit } from '../../utils/user/authFormHandlers';

function RegisterPage() {
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();

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
				<form className="form" onSubmit={e => handleRegisterSubmit(e, setSuccess, navigate)}>
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
