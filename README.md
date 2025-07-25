# AppBook - Resumen del Proyecto IA

## 1. IA seleccionada y motivo
 Antes de decidirme, comparé varias opciones (ChatGPT, DALL·E, Gemini, DeepSeek) y elegí Copilot por su integración directa en el editor, facilidad de uso y calidad de las sugerencias dependiendo del contexto del proyecto.
 
**Ventajas:**
- Ahorra mucho tiempo en tareas repetitivas y en la generación de código base.
- Sugereix solucions modernes i bones pràctiques de desenvolupament.
- Facilita l'organització i refactorització del projecte.
- Ajuda a descobrir noves formes de resoldre problemes i a aprendre sobre llibreries o patrons que no coneixia.

**Contras:**
- A vegades suggereix codi que no s'ajusta exactament al context del projecte i requereix revisió manual.
- Pot generar dependències innecessàries si no es revisen les imports i el codi suggerit.
- No substitueix la comprensió profunda del codi ni el raonament humà per prendre decisions d'arquitectura.

**Conclusió:**
GitHub Copilot és una eina molt útil per accelerar el desenvolupament i millorar la qualitat del codi, sempre que es combini amb una revisió crítica i coneixement propi. És un gran suport per iterar ràpidament, però la supervisió humana segueix sent clau per garantir la coherència i l'èxit del projecte.

## 2. Interaccions més interessants amb la IA

Moltes de les interaccions més útils van ser processos guiats, on jo explicava pas a pas com volia crear un objecte, component o secció, i la IA m'ajudava a transformar aquestes idees en codi real. Alguns exemples concrets:

- **Creació de banners i seccions personalitzades:**
  - Jo descrivia detalladament com volia el banner (colors, posició, text, estil modern, etc.) i la IA generava el codi HTML/CSS i suggeria millores visuals.
  - Exemple: “Vull un banner amb un degradat de color, títol gran i subtítol centrat, i que sigui responsiu.”
  - Resposta IA: Proposta de codi amb `div` estilitzat, gradient CSS i estructura flexible.

- **Construcció d'objectes i dades fictícies:**
  - Jo indicava quins camps volia per als llibres o usuaris, i la IA em generava l'objecte JavaScript corresponent i exemples de dades.
  - Exemple: “Necessito un objecte llibre amb títol, autor, portada i descripció.”
  - Resposta IA: Creació d'un array d'objectes amb aquests camps i valors ficticis.

- **Procés iteratiu i personalitzat:**
  - Sovint, anava detallant pas a pas (“ara afegeix un botó”, “ara fes que el text sigui més gran”, etc.) i la IA adaptava el codi segons les meves instruccions, permetent un desenvolupament molt àgil i a mida.

    - Aquest estil de col·laboració va fer que el desenvolupament fos molt més ràpid, personalitzat i alineat amb el que realment volia aconseguir.


- **Edició de llibre o usuari des del frontend:**
  - Exemple: “Vull editar la informació d’un llibre o d’un usuari directament des de la interfície, sense backend.”
  - Resposta IA: Proposta de funcions per actualitzar l’objecte corresponent en el localStorage i refrescar l’estat del component, tot gestionant-ho des del frontend.
    ```js
    // Editar llibre (frontend)
    const handleEditBook = (bookId, updatedBook) => {
      updateBookInLocalStorage(bookId, updatedBook);
      setBooks(getBooksFromLocalStorage());
    };

    // Editar usuari (frontend)
    const handleEditUser = (updatedUser) => {
      updateUserInLocalStorage(updatedUser);
      setCurrentUser(updatedUser);
    };
    ```
    - Així, qualsevol canvi realitzat a través dels formularis d’edició es reflecteix immediatament a la interfície, simulant el comportament d’una aplicació real tot i treballar només amb dades locals.

- **Generació de codi per a funcionalitats específiques:**
  - Jo especificava una funcionalitat concreta, com ara el registre d'usuaris o la navegació entre pàgines, i la IA generava el codi necessari per implementar-ho.  

  - Exemple: “Vull implementar un formulari de registre que emmagatzemi l'usuari al localStorage i redirigeixi a la pàgina de login.”
  - Resposta IA: Generació del codi per al formulari, gestió de l'estat i la redirecció utilitzant React Router.
    ```js
    // Formulari de registre
    const handleRegister = (e) => {
      e.preventDefault();
      const newUser = { username, email, password };
      saveUserToLocalStorage(newUser);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 1200);
    };


#### Exemple de codi generat
```js
// Registro
saveUserToLocalStorage(user);
setSuccess(true);
setTimeout(() => navigate('/login'), 1200);

// Login
const found = users.find(u => u.username === username && u.password === password);
if (found) setCurrentUser(found);

// Edició de llibre
const handleEdit = (bookId, newData) => {
  updateBookInLocalStorage(bookId, newData);
  setBooks(getBooksFromLocalStorage());
};

// Eliminació de llibre
const handleDelete = (bookId) => {
  deleteBookFromLocalStorage(bookId);
  setBooks(getBooksFromLocalStorage());
};

// Edició de perfil d'usuari
const handleSave = (e) => {
  e.preventDefault();
  setCurrentUser({ ...user, username, email, password });
  navigate("/perfil");
};

**conclusions sobre les interaccions**
```
- També veia que si no detallava bé les explicacions, la IA no generava el codi correcte. Per exemple, si no especificava que volia un botó amb un color específic o un text concret, la IA podia generar alguna cosa genèrica que no s'ajustava a les meves necessitats.
- També per ajudar a que la IA entengués millor, era útil explicar per petits passos. Exemple: "Ara afegeix un botó", "Ara fes que el text sigui més gran", etc., després si havia de millorar, explicava detalladament el que volia canviar o afegir.

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
- Se aplicaron bones pràctiques de desenvolupament: modularitat, separació de responsabilitats, ús de hooks i components reutilitzables.
- Se automatizó la limpieza de imports y la detección/eliminación de archivos duplicados, lo que mejoró la mantenibilidad.
- El projecte està preparat per integrar-se fàcilment amb un backend real, només canviant les funcions d'accés a dades.
- La col·laboració amb la IA va permetre estalviar temps, evitar errors manuals i pensar millor l'arquitectura del projecte.
- Com a millora futura, es podria afegir internacionalització, tests automàtics i desplegament continu.

## 6. Canvis recents i estructura
- Es van crear pàgines Home, Book, Login i Register amb la mateixa estructura i estils.
- Es va implementar un header reutilitzable i formularis moderns.
- Es van organitzar els fitxers en carpetes (components, pàgines, estils, utils).
- Es va documentar tot el procés i les interaccions al README.
- S'ha afegit la funcionalitat per editar i eliminar llibres directament des de la interfície, amb actualització automàtica de la llista.
- S'ha implementat la pàgina d'edició de perfil d'usuari, permetent canviar nom, email i contrasenya amb el mateix estil modern que la vista de perfil.



---

