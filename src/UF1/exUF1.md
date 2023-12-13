**UF1 - Joc d'Endevinar Paraules**

**Descripció:**

Crea un joc senzill d'endevinar paraules en JavaScript. El joc consisteix en seleccionar una paraula aleatòria de la llista de paraules, mostrar una representació oculta d'aquesta paraula (amb guions baixos per a les lletres no endevinades), i permetre als jugadors endevinar lletres una a una. Els jugadors tenen un nombre limitat d'intents per endevinar la paraula completa, i el joc finalitza quan aconsegueixen endevinar-la o quan s'esgoten els seus intents. A continuació tens una imatge explicativa:

![Joc d'Endevinar Paraules](./img/endevina_paraules.gif)

**Instruccions:**

0. (1p) La qualitat dels comentaris es valorarà amb un màxim d'un punt en funció de l'encert i la qualitat dels mateixos.

1. (0,5p) Defineix les variables necessàries per al joc, com ara:

   - `paraules`: Una llista de paraules de les quals s'escollirà una aleatòriament.
   - `paraulaSecreta`: La paraula que el jugador ha de descobrir.
   - `lletresEndevinades`: Una llista de lletres que el jugador ha intentant endevinar.
   - `intentsRestants`: El nombre d'intents disponibles.
   - Altres variables que necessitis per a la lògica del joc.

2. (1p) Crea una funció **seleccionarParaulaAleatoria()** que seleccioni aleatòriament una paraula de la llista `paraules`. Aquesta funció hauria de tornar la paraula seleccionada com a `paraulaSecreta`.

3. (0,5p) Inicialitza les variables del joc amb els valors necessaris. Això inclou:

   - Seleccionar una paraula aleatòria mitjançant la funció de l'etapa anterior.
   - Inicialitzar variables com `lletresEndevinades` i `intentsRestants` amb els valors adequats.

4. (2p) Desenvolupa una funció **gestionarEntrada()** que gestioni l'entrada del jugador. Aquesta funció ha de:

   - Demanar a l'usuari que introdueixi una lletra.
   - Comprovar si la lletra introduïda és vàlida (una sola lletra) i si no ha estat ja provada abans.
   - Comprovar si la lletra és correcta o no, i actualitzar els intents restants i les lletres endevinades.

5. (2p) Crea una funció **mostrarProgresDelJoc()** que actualitzi la interfície del joc. Això inclou mostrar la paraula amb les lletres endevinades i guions baixos, els intents restants i qualsevol missatge relatiu al progrés del joc.

6. (1,5p) Implementa una funció **comprovarGuanyarOPerdre()** que comprovi si el joc ha finalitzat, ja sigui perquè el jugador ha endevinat la paraula o perquè s'han esgotat els intents.

7. (1,5p) Desenvolupa una funció que permeti reiniciar el joc un cop s'hagi acabat. Aquesta funció ha de reiniciar les variables i oferir al jugador l'oportunitat de tornar a jugar.
