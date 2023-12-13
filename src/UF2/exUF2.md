# UF2 - Dades d'un centre educatiu

Al Cirviànum estem mirant d'automatitzar algunes funcions per obtenir una millor informació de les dades personals i el rendiment del nostre alumnat. Estem fent proves amb dos cursos de DAW, MP6 i MP7. Cada curs té 3 assignatures: Programació, Bases de dades i Entorns Com pots veure a l'arxiu `dades.js`, tenim un array amb tota la informació dels estudiants matriculats en aquests dos cursos. Ajuda'ns a implementar les següents funcions per obtenir la informació que necessitem. En aquest exercici és especialment important que facis atenció a intentar reutilitzar funcions ja implementades per no repetir codi i es valorarà:

0. (1p) La qualitat dels comentaris es valorarà amb un màxim d'un punt en funció de l'encert i la qualitat dels mateixos.

1. (0,5p) Implementa la funció `mitjanaEdat()` que retorni la mitjana d'edat de totes els estudiants matriculats.

2. (0,5p) Implementa la funció `estudiantsMatriculats()` que retorni el nombre d'estudiants matriculats.

3. (1p) Implementa la funció `estudiantsGenere()` que, donat un gènere (M o F), retorni un array amb els noms i cognoms dels estudiants d'aquest gènere.

4. (1p) Implementa la funció `dataInscripcio()` que donat un nom i cognoms (paràmetres), retorni la data d'inscripció de l'estudiant en format `dd/mm/aaaa`. Algun dels mètodes de l'objecte Date et pot ser útil per aquesta funció (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)

5. (1p) Implementa la funció `notaMitjana()` que, donat els cognoms i el curs, retorni la nota mitjana de l'estudiant per aquest curs concret. Pots fer servir el mètode toFixed() per arrodonir el resultat a 1 decimal.

6. (1p) Implementa la funció `mitjanaCurs()` que, donat un curs (MP6 o MP7), retorni la nota mitjana de tots els estudiants matriculats en aquest curs/assignatura.

7. (1p) Se'ns ha oblidat actualitzar les notes finals! Implementa la funció `notesFinals()` que retorni un array amb informació de les notes de cada curs.

8. (1p) Implementa la funció `estudiantsAprovatsCurs()` que, donat un curs (MP6 o MP7), retorni un array amb els noms i cognoms dels estudiants que han aprovat totes les assignatures del curs. Si alguna de les UFs està suspesa, l'estudiant no estarà aprovat encara que la mitjana de les altres assignatures sigui superior a 5.

9. (1p) Implementa la funció `estudiantTop()` que, donat un curs, trobi l'estudiant amb la nota més alta i retorni el seu seu nom i cognoms, així com les seves notes finals totals. No és estrictament necessari que tinguis en compte si té o no assignatures/cursos supesos.

10. (1p) Implementa la funció ufPendents() que, donat un curs, retorni un array amb els noms i cognoms dels estudiants que tenen UF pendents així com un array amb la informació d'aquestes.
