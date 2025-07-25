// utils/writerFormHandlers.js

// Handler para campos de texto en formularios de escritor
export const handleWriterChange = (e, setForm) => {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
};

// Handler para submit de formulario de escritor
export const handleWriterSubmit = (e, form, currentUser, setSuccess, setForm, saveWriterToLocalStorage, setCurrentUser, navigate) => {
  e.preventDefault();
  // Generar idwriter único
  const idwriter = Date.now();
  // Crear writer con la estructura correcta
  const writer = createWriter({
    idwriter,
    user: currentUser,
    username: currentUser?.username,
    biografia: form.bio
  });
  saveWriterToLocalStorage(writer);
  setCurrentUser({ ...currentUser, writerProfile: true });
  setSuccess(true);
  setTimeout(() => {
    setSuccess(false);
    navigate("/perfil-writer");
  }, 1200);
  setForm({ username: currentUser?.username || "", bio: "" });
};

// Función para crear un Writer vinculado a un User
// Writer: { idwriter, iduser, username, biografia }
// iduser debe ser el id del User y no puede modificarse
export function createWriter({ idwriter, user, username, biografia }) {
  if (!user || !user.id) {
    throw new Error('User inválido para vincular Writer');
  }
  return {
    idwriter,
    iduser: user.id, // No modificable
    username,
    biografia,
  };
}

// Ejemplo de uso:
// const user = { id: 1, username: 'juan', correo: 'juan@mail.com', contrasenya: '1234' };
// const writer = createWriter({ idwriter: 10, user, username: 'juan_writer', biografia: 'Autor de cuentos.' });
