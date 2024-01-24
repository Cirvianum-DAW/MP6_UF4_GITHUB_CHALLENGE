function verificarCredencials(nomUsuari, contrasenya) {
    const usuarisAutoritzats = [
      { nom: 'usuari1', contrasenya: 'pass1' },
      { nom: 'usuari2', contrasenya: 'pass2' },
      // Afegiu més usuaris autoritzats si cal
    ];
  
    return new Promise((resolve, reject) => {
      // Simula un retard de 1 segon per verificar les credencials (simulació asíncrona)
      setTimeout(() => {
        const usuariTrobat = usuarisAutoritzats.find(
          (usuari) =>
            usuari.nom === nomUsuari && usuari.contrasenya === contrasenya
        );
        if (usuariTrobat) {
          resolve('Accés concedit');
        } else {
          reject('Accés denegat');
        }
      }, 1000); // Simula un retard de 1 segon
    });
  }
  
  async function accedirZonaRestringida(nomUsuari, contrasenya) {
    try {
      const resultat = await verificarCredencials(nomUsuari, contrasenya);
      return resultat;
    } catch (error) {
      throw error;
    }
  }
  
  // Crida a la funció amb async/await
  async function main() {
    try {
      const resultat = await accedirZonaRestringida('usuari1', 'pass1');
      console.log(resultat); // Hauria de mostrar "Accés concedit"
    } catch (error) {
      console.error(error);
    }
  }
  
  main();