// src/utils/authFormHandlers.js
// Handlers centralizados para formularios de login y registro

import { getUsersFromLocalStorage, setCurrentUser, saveUserToLocalStorage } from "./userStorage";

export function handleLoginSubmit(e, setError, setSuccess, navigate) {
  e.preventDefault();
  const form = e.target;
  const username = form[0].value;
  const password = form[1].value;
  const users = getUsersFromLocalStorage();
  const found = users.find(
    (u) => u.username === username && u.password === password
  );
  if (found) {
    setCurrentUser(found);
    setSuccess(true);
    setError("");
    form.reset();
    navigate("/perfil");
  } else {
    setError("Usuario o contraseña incorrectos");
    setSuccess(false);
  }
}

export function handleRegisterSubmit(e, setSuccess, navigate) {
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
