# AppBook - Resumen Proyecto IA

## 1. IA seleccionada y motivo
He utilizado GitHub Copilot como asistente IA para el desarrollo frontend. Lo elegí por su capacidad para generar código rápido, moderno y adaptado a mis necesidades, facilitando la creación de interfaces en React y la resolución de problemas de diseño y estructura.

## 2. Interacciones más interesantes con la IA

### Home
- ¿Cómo crear un header fixe, professional i responsiu?
- ¿Com dissenyar un banner atractiu i modern amb fons degradat?
- ¿Com generar llibres ficticis i alinear-los perfectament a la quadrícula?

### Book
- ¿Com organitzar els llibres per gèneres i mostrar una secció amb tots els llibres?
- ¿Com centrar i alinear els llibres a cada secció?
- ¿Com navegar entre Home i Book utilitzant React Router?

### Register
- ¿Com fer que el registre funcioni només en frontend utilitzant localStorage?
- ¿Com mostrar un missatge d'èxit i redirigir automàticament al login?

### Login
- ¿Com validar el login contra els usuaris desats a localStorage?
- ¿Com mostrar l'usuari loguejat al header i permetre tancar sessió?

### Organització i estructura
- ¿Com centralitzar els estils i components perquè siguin reutilitzables?
- ¿Com organitzar el projecte en carpetes per a una major neteja i manteniment?
- ¿Com simular la connexió amb una API i preparar el frontend per integrar-se amb un backend real?

### Exemple de codi generat
```js
// Registro
saveUserToLocalStorage(user);
setSuccess(true);
setTimeout(() => navigate('/login'), 1200);

// Login
const found = users.find(u => u.username === username && u.password === password);
if (found) setCurrentUser(found);
```

## 3. Anàlisi del codi generat
- El codi generat és modular, clar i fàcilment personalitzable.
- S'utilitzen components funcionals, hooks (`useState`, `useEffect`), React Router i CSS modern.
- Es van centralitzar estils i components per facilitar el manteniment i la coherència visual.
- Es va adaptar el codi per funcionar sense backend, simulant usuaris i sessions en localStorage.

## 4. Connexió frontend-backend
- El frontend està preparat per consumir una API RESTful (fetch/axios).
- Es van simular crides a l'API amb dades fictícies, mostrant com s'integrarien els endpoints reals.
- El codi es pot connectar fàcilment a un backend PHP/Laravel canviant la URL dels endpoints.
- Reptes: adaptar la interfície per funcionar sense dades reals i garantir flexibilitat per a dades dinàmiques.

## 5. Reflexió sobre l'aprenentatge
- He après a iterar ràpidament sobre el disseny i la funcionalitat amb ajuda de la IA.
- He millorat l'organització del codi i la documentació del procés.
- El major repte va ser mantenir coherència visual i funcional sense backend, però la IA va facilitar molt la generació de solucions creatives.

## 6. Canvis recents i estructura
- Es van crear pàgines Home, Book, Login i Register amb la mateixa estructura i estils.
- Es va implementar un header reutilitzable i formularis moderns.
- Es van organitzar els fitxers en carpetes (components, pàgines, estils, utils).
- Es va documentar tot el procés i les interaccions al README.

## 7. Repositori i presentació
- Tot el codi i la documentació estan disponibles al repositori de GitHub.
- La presentació inclou exemples visuals, preguntes clau i reflexions sobre el procés.

---

