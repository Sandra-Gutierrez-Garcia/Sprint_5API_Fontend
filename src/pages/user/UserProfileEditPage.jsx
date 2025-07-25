import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import { getCurrentUser, setCurrentUser } from "../../utils/user/userStorage";

function UserProfileEditPage() {
  const user = getCurrentUser();
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(user?.password || "");
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    // Mantener el id original del usuario
    setCurrentUser({ ...user, username, email, password });
    // Actualizar también el usuario en la lista de usuarios
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(u => u.id === user.id ? { ...u, username, email, password } : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate("/perfil");
  };

  return (
    <div className="profile-page-bg">
      <Header />
      <ProfileCard
        title="Editar perfil"
        avatar={<span role="img" aria-label="avatar">👤</span>}
        fields={[
          {
            label: "Usuario",
            value: (
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="profile-edit-input"
                required
                style={{ width: '100%' }}
              />
            )
          },
          {
            label: "Email",
            value: (
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="profile-edit-input"
                required
                style={{ width: '100%' }}
              />
            )
          },
          {
            label: "Contraseña",
            value: (
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="profile-edit-input"
                required
                style={{ width: '100%' }}
                autoComplete="new-password"
              />
            )
          }
        ]}
        actions={
          <>
            <button className="profile-save-btn" onClick={handleSave} style={{ marginRight: 16 }}>Guardar</button>
            <button className="profile-header-btn" onClick={() => navigate('/perfil')}>Cancelar</button>
          </>
        }
      />
    </div>
  );
}

export default UserProfileEditPage;
