import React from "react";
import Header from "./Header";
import "./RegisterPage.css";

function RegisterPage() {
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

			<section className="register-form-section">
				<h2 className="form-title">Crea tu cuenta</h2>
				<form className="register-form">
					<input
						type="text"
						placeholder="Usuario"
						className="register-input"
					/>
					<input
						type="email"
						placeholder="Email"
						className="register-input"
					/>
					<input
						type="password"
						placeholder="Contraseña"
						className="register-input"
					/>
					<button type="submit" className="register-btn">
						Registrarse
					</button>
				</form>
			</section>
		</div>
	);
}

export default RegisterPage;
