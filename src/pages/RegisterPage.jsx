import React from "react";
import Header from "../components/Header";
import "../styles/Form.css";

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

			<section className="form-section">
				<h2 className="form-title">Crea tu cuenta</h2>
				<form className="form">
					<input
						type="text"
						placeholder="Usuario"
						className="input"
					/>
					<input
						type="email"
						placeholder="Email"
						className="input"
					/>
					<input
						type="password"
						placeholder="Contraseña"
						className="input"
					/>
					<button type="submit" className="btn">
						Registrarse
					</button>
				</form>
			</section>
		</div>
	);
}

export default RegisterPage;
