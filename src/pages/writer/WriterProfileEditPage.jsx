import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import { getCurrentUser } from "../../utils/user/userStorage";
import { getWritersFromLocalStorage, saveWriterToLocalStorage } from "../../utils/writer/writerStorage";

function WriterProfileEditPage() {
  const user = getCurrentUser();
  const writers = getWritersFromLocalStorage();
  // Buscar writer por iduser
  const writer = writers.find(w => w.iduser === user?.id);
  const [username, setUsername] = useState(writer?.username || "");
  const [biografia, setBiografia] = useState(writer?.biografia || "");
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    // Actualizar writer manteniendo idwriter e iduser
    const updatedWriter = { ...writer, username, biografia };
    const updatedWriters = writers.map(w => w.idwriter === writer.idwriter ? updatedWriter : w);
    localStorage.setItem('writers', JSON.stringify(updatedWriters));
    navigate("/perfil-writer");
  };

  if (!writer) {
    return (
      <div className="profile-page-bg">
        <Header />
        <div style={{textAlign:'center', marginTop:'80px', color:'#e94e77', fontWeight:600, fontSize:'1.3rem'}}>
          No se encontró el perfil de escritor.<br />
          <button className="profile-header-btn" onClick={() => navigate('/crear-writer')}>Crear perfil de escritor</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page-bg">
      <Header />
      <ProfileCard
        title="Editar perfil de escritor"
        avatar={<span role="img" aria-label="avatar">📝</span>}
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
            label: "Biografía",
            value: (
              <input
                type="text"
                value={biografia}
                onChange={e => setBiografia(e.target.value)}
                className="profile-edit-input"
                required
                style={{ width: '100%' }}
              />
            )
          }
        ]}
        actions={
          <>
            <button className="profile-save-btn" onClick={handleSave} style={{ marginRight: 16 }}>Guardar</button>
            <button className="profile-header-btn" onClick={() => navigate('/perfil-writer')}>Cancelar</button>
          </>
        }
      />
    </div>
  );
}

export default WriterProfileEditPage;
