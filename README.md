# AppBook - Frontend

## 1. Descripció del model IA seleccionat i motiu de l'elecció
He utilitzat GitHub Copilot com a assistent d'IA per al desenvolupament del frontend. L'he escollit perquè permet generar codi de manera ràpida, iterativa i adaptada a les meves necessitats, facilitant la creació d'interfícies modernes i la resolució de problemes de disseny i estructura en React.

## 2. Registre de les interaccions amb la IA
- Vaig demanar ajuda per crear un header fix, professional i responsiu.
- Vaig sol·licitar inspiració i estructura per al banner principal, ajustant el seu disseny fins aconseguir un resultat atractiu.
- Vaig demanar que la imatge de portada estigués al costat del text, amb proporcions de llibre i tot centrat.
- Vaig ajustar la responsivitat, separació i tipografia segons les propostes de la IA.
- Vaig demanar la creació d'una secció de llibres ficticis, amb portades locals i estructura visual equilibrada.
- Exemples de preguntes: "Centra el banner i la imatge", "Haz que los libros estén perfectamente alineados", "Genera datos ficticis per als llibres".
- La IA va respondre amb codi, explicacions i suggeriments visuals per cada pas.

## 3. Anàlisi del codi generat per la IA
- El codi generat és modular, clar i fàcilment personalitzable.
- S'utilitzen components funcionals de React, hooks (`useState`, `useEffect`) i CSS modern (flex, grid, media queries).
- Es va adaptar el codi per utilitzar només imatges locals i dades fictícies, assegurant coherència visual i funcionalitat sense backend real.
- Es van fer petits ajustos manuals per millorar la responsivitat i l'alineació dels elements.

## 4. Descripció del procés de connexió frontend-backend
- El frontend està preparat per consumir una API RESTful (exemple: crides amb `fetch` o `axios`).
- Per demostrar la connexió, es va simular una crida a l'API amb dades fictícies, mostrant com es rebrien i renderitzarien els llibres.
- Si es connecta amb un backend PHP/Laravel real, només caldria substituir la crida mock per l'endpoint real (exemple: `fetch('http://localhost:8000/api/books')`).
- Reptes: adaptar el codi per funcionar sense backend real i garantir que la interfície sigui flexible per a dades dinàmiques.

## 5. Reflexió sobre el procés d'aprenentatge
- El procés m'ha permès entendre millor la col·laboració amb IA per desenvolupar interfícies modernes i responsives.
- He après a iterar ràpidament sobre el disseny, a ajustar detalls visuals i a documentar el procés de manera clara.
- El repte principal ha estat aconseguir una coherència visual i funcional sense dades reals, però la IA ha facilitat molt la generació de codi i solucions creatives.

# AppBook - Página Book

## Resumen de interacciones interesantes con la IA sobre la página Book

Durante el desenvolupament de la pàgina Book, aquestes han estat les interaccions més interessants:

- Solicité crear una nova pàgina llamada Book amb la mateixa estructura base que Home, però mostrant llibres per gèneres i una secció de tots els llibres.
- Pedí que els apartats de llibres estiguessin organitzats per gènere (Fantasy, Romance, Sci-Fi, Mystery) i que al final hi hagués un apartat amb tots els llibres junts.
- Solicité que els llibres quedessin perfectament centrats a la quadrícula de cada secció.
- Pedí que la navegació entre Home i Book fos possible des del menú, utilitzant React Router.
- Es va generar i aplicar un fitxer d'estils específic per a Book, assegurant un disseny net i modern.
- Es va documentar com tancar la branca de desenvolupament utilitzant git flow després de finalitzar la funcionalitat.

Exemples de preguntes:

- "Vamos a crear la página book, allí tiene el mismo estructura que home, pero la diferencia tiene apartados, donde muestran libros son de un género específico..."




# AppBook - Home Page

## Resumen de la Main Page

La Main Page de AppBook presenta un disseny modern i net, amb un header fix, un banner destacat i una secció de llibres ficticis perfectament alineats. Tot el contingut és responsiu i visualment atractiu, pensat per oferir una experiència agradable tant a escriptors com a lectors. L'estructura facilita la futura integració amb una API real i l'ampliació de funcionalitats.

## Resumen de interacciones interesantes con la IA

Durante el desenvolupament de la Home Page, les interaccions més interessants amb la IA han estat:

- Solicitar la creació i millora d'un header fix, professional i responsiu, ajustant alineació, colors i tipografia.
- Pedir inspiració i estructura per al banner principal, logrant un disseny atractiu i modern amb fons degradat i elements centrats.
- Ajustar l'amplada, altura i disposició del banner fins que s'adaptà perfectament a la referència visual.
- Solicitar la generació de llibres ficticis, utilitzant només imatges locals i dades inventades, per mostrar una secció de llibres realista i visualment coherent.
- Pedir que els llibres estiguessin perfectament centrats i alineats, amb la mateixa mida i separació a la quadrícula.
- Iterar sobre la responsivitat i els detalls visuals perquè la pàgina es veiés bé a qualsevol dispositiu.

- Exemples de preguntes: "Crea un header responsiu", "Millora el banner amb un fons degradat", "Genera llibres ficticis amb imatges locals".

# AppBook - Login y Register Pages

## Resumen de los cambios recientes

- Se crearon las páginas Login y Register seguint la mateixa estructura, colors i coherència visual que Home i Book.
- Se implementó un component `Header` reutilizable, ara present a Home, Book, Login i Register per mantenir la identitat visual en tota l'app.
- Els formularis de Login i Register utilitzen estils moderns i responsius, amb el mateix fons i tipografia que la resta de l'aplicació.
- Se reorganitzà el codi perquè el header no estigui duplicat, facilitant el manteniment i la coherència.
- Se creó una rama feature amb git flow per desenvolupar aquestes pàgines de forma ordenada.

## Exemple de interacción

- "Crea las páginas login y register, pero que tengan el mismo header, estructura y colores que home para que la experiencia sea fluida y coherente."

# Cambios recientes y componentes reutilizables

## Componentes reutilizables
- Se creó el componente `Header` per al menú superior, usat en totes les pàgines principals.
- Se creó el componente `BookCard` per mostrar llibres de forma uniforme i reutilitzable en Home i Book.

## Modificaciones importants
- Se reemplazó el header hardcodeado en Home i Book per el componente `Header`.
- Se reemplazó la renderización de llibres en Home i Book per el componente `BookCard`.
- El menú ara resalta dinàmicament la pàgina activa (Home o Books) usando `useLocation` de React Router.

Aquests canvis milloren la coherència visual, el manteniment i l'escalabilitat del projecte.

