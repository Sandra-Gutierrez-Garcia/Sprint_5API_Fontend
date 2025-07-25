// utils/writerFormHandlers.js

// Handler para campos de texto en formularios de escritor
export const handleWriterChange = (e, setForm) => {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
};

// Handler para submit de formulario de escritor
export const handleWriterSubmit = (e, form, currentUser, setSuccess, setForm, saveWriterToLocalStorage, setCurrentUser, navigate) => {
  e.preventDefault();
  saveWriterToLocalStorage({ username: currentUser?.username, bio: form.bio });
  setCurrentUser({ ...currentUser, writerProfile: true });
  setSuccess(true);
  setTimeout(() => {
    setSuccess(false);
    navigate("/perfil-writer");
  }, 1200);
  setForm({ username: currentUser?.username || "", bio: "" });
};
