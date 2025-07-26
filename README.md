# AppBook - Resumen del Proyecto IA

## 1. IA seleccionada i motivo
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

- **Gestió localStorage:**
  - Le pregunte como hacer las preubas que todo funcione bien, sin tener que hacer un backend real. Todo desde el Frontend.
  - Respuesta IA: Con el localStorage, se pueden simular operaciones CRUD (crear, leer, actualizar, eliminar) de manera sencilla. La IA generó funciones para guardar, recuperar y eliminar datos de usuarios, libros y autores en el localStorage.
    ```js
    // Guardar usuari al localStorage
    const saveUserToLocalStorage = (user) => {
      const users = getUsersFromLocalStorage();
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    };

    // Recuperar usuaris del localStorage
    const getUsersFromLocalStorage = () => {
      return JSON.parse(localStorage.getItem('users')) || [];
    };
    ```
- **Filtros de statuts o generos**
  - Le comente que quwria implementar un sistema de filtres per mostrar llibres segons el seu estat (en procés, acabat, abandonat) i gènere y que se mostraran tots els llibres junts segons l'estat seleccionat.
  - Respuesta IA: Generación de un sistema de filtros combinados que permite seleccionar múltiples criterios y mostrar los libros correspondientes. La IA propuso un componente de filtro que actualiza el estado de los libros mostrados según las selecciones del usuario.
    ```js
    // Componente de filtres
    const Filters = () => {
      // Filtres per estat i gènere
      const [statusFilter, setStatusFilter] = useState('');
      const [genreFilter, setGenreFilter] = useState('');

      return (
        <div>
          <select onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">Tots els estats</option>
            <option value="in-progress">En procés</option>
            <option value="finished">Acabat</option>
            <option value="abandoned">Abandonat</option>
          </select>
          <select onChange={(e) => setGenreFilter(e.target.value)}>
            <option value="">Tots els gèneres</option>
            <option value="fiction">Ficció</option>
            <option value="non-fiction">No ficció</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </div>
      );
    };

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

## 4. Connexió entre frontend i backend

Aquest projecte correspon a un exercici de nivell 1, on no s'ha implementat la connexió real amb un backend (com una API PHP/Laravel). Tota la gestió de dades (usuaris, escriptors i llibres) es realitza exclusivament des del frontend utilitzant `localStorage`.

**Procés i reptes:**
- S'han creat funcions que simulen les operacions CRUD (crear, llegir, actualitzar, eliminar) sobre usuaris, escriptors i llibres, emmagatzemant la informació al navegador.
- El codi està estructurat perquè, en el futur, només calgui substituir aquestes funcions per peticions `fetch` o `axios` als endpoints reals del backend.
- El principal repte ha estat mantenir la coherència i la integritat de les dades (relacions entre usuaris, escriptors i llibres) sense una base de dades real, cosa que s'ha resolt amb lògica addicional al frontend.
- Aquesta aproximació permet visualitzar i provar tota la funcionalitat de l'aplicació sense necessitat de desplegar un backend ni una API real.

**Nota:** Quan es vulgui connectar amb un backend real, només caldrà adaptar les funcions de lectura/escriptura de dades per utilitzar l'API corresponent.

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

## 3. Millores implementades: Filtres avançats a la pàgina de llibres

S'ha afegit un sistema de filtres combinats a la pàgina de llibres (BookPage):

- **Filtre per estat del llibre:** Permet mostrar només llibres "En procés", "Terminat" o "Abandonat". Si s'aplica el filtre, es mostren tots els llibres junts segons l'estat seleccionat.
- **Filtre per gènere:** Permet mostrar només llibres d'un gènere concret. Si s'aplica el filtre, es mostren tots els llibres junts segons el gènere seleccionat.
- **Combinació de filtres:** Es poden combinar els dos filtres per veure, per exemple, només llibres de "Romance" que estiguin "En procés".
- **Vista per defecte:** Si no s'aplica cap filtre, la vista mostra els llibres agrupats per gènere i també una secció amb tots els llibres.

Aquesta millora facilita la cerca i navegació entre llibres segons l'estat i el gènere, millorant l'experiència d'usuari i la gestió de la biblioteca.


