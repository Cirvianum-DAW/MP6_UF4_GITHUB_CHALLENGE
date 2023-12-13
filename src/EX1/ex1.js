// Part1 - Implementa una funció `getData` encarregada de fer les peticions a l'API de l'INE. Aquesta funció rebrà ja directament la URL generada pel generador de URLs de l'INE i retornarà una Promise amb les dades en format JSON. Fes servir sintaxi async/await preferiblement.

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error; // re-throw the error to be caught by the calling function
    }
};

// Part2 - `getRentPrices` with try/catch

const getRentPrices = async () => {
    const url = 'https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/59057?nult=10';
    try {
        const data = await getData(url);
        //console.log(data)
        return data;
    } catch (error) {
        // Mostrem el missatge d'error que ens retorna el servidor
        console.error('Error:', error);
        return [];
    }
};

const showRentPrices = (data) => {
    // Filtrem les dades per obtenir només les que contenen "Nombre: Cataluña"
    data = data.filter(entrada => entrada.Nombre.includes('Cataluña. Total.'));
    //console.log(data)

    // Obtenim els divs de la secció ex12
    const divs = document.querySelectorAll('.contenidor > div');

    // Creem els dos element de la llista
    const ulElementVariacio = document.createElement('ul');
    const ulElementIndex = document.createElement('ul');

    data.forEach(entrada => {
        entrada.Data.forEach(item => {
            // Crea un element de la llista per cada ítem de dades
            const liElement = document.createElement('li');

            // Comprovem si es tracta de la Variació Anual o de l'Índex de Preus
            if (entrada.Nombre.includes('Variación anual')) {
                // Afegeix el contingut a cada element de la llista
                liElement.innerHTML = `${item.Anyo}, Variació Anual: ${item.Valor}`;
                // Afegeix l'element de la llista a la llista de Variació Anual
                ulElementVariacio.appendChild(liElement);
            } else if (entrada.Nombre.includes('Índice')) {
                // Afegeix el contingut a cada element de la llista
                liElement.innerHTML = `${item.Anyo}, Índex: ${item.Valor}`;
                // Afegeix l'element de la llista a la llista de l'Índex de Preus
                ulElementIndex.appendChild(liElement);
            }
        });
    });

    // Afegeix la llista de Variació Anual al divisió corresponent de la secció ex12
    divs[0].appendChild(ulElementVariacio);
    // Afegeix la llista de l'Índex de Preus al divisió corresponent de la secció ex12
    divs[1].appendChild(ulElementIndex);
    return data;
}

// Recuperem les dades d'IPC


const getIPC = async () => {
    const url = 'https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/50934?nult=10';
    try {
        const data = await getData(url);
        // Anem a actualitzar el selector amb el nombre d'anys que tenim
        const select = document.getElementById('any-selector');
        // Per cada any, afegim un element option amb el valor de l'any
        data.forEach(entrada => {
            const option = document.createElement('option');
            // Ens desfem de la primera part del nom, que és la mateixa per a totes les entrades
            const nameParts = entrada.Nombre.split('.');
            const nameAfterFirstDot = nameParts.slice(1).join('.');
            option.value = nameAfterFirstDot;
            option.text = nameAfterFirstDot;
            select.appendChild(option);
        });
        return data;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

// Funció per mostrar el gràfic showIPC

const showIPC = async () => {
    const data = await getIPC()
    // Obtenim el valor seleccionat del selector d'anys
    const select = document.getElementById('any-selector');
    const IPCselected = select.value;
    
    // Ara hem d'assegurar-nos que podem enviar els valors correctes a la funció que crea el gràfic
    // Per això, hem de filtrar les dades per obtenir només les que contenen el valor seleccionat
    console.log(data)
    const filteredData = data.filter(entrada => entrada.Nombre.includes(IPCselected));

    // I per aquest valor, hem de crear dues llistes, una amb els anys i l'altra amb els valors

    const labels = [];
    const values = [];
    filteredData.forEach(entrada => {
        entrada.Data.forEach(item => {
            labels.push(item.Anyo);
            values.push(item.Valor);
        });
    });
    // Canviem l'ordre de les llistes perquè el gràfic es mostri de més antic a més recent
    labels.reverse();
    values.reverse();
    // Ara ja podem cridar la funció que crea el gràfic
    myChart(labels, values);
}

let chart = null; // Declarem una variable global per a guardar el gràfic

const myChart = (labels, data) => {
    console.log(labels, data)
    const ctx = document.getElementById('myChart').getContext('2d');
    if (chart) { // If a chart exists
        chart.destroy(); // Destroy it
    }
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Índex de Preus',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]
        },
        options: {}
    });

    return chart;
}

// Necessitem un event listener per a quan es canvia el valor del selector
const select = document.getElementById('any-selector');
select.addEventListener('change', showIPC);


main = async () => {
    const data = await getRentPrices();
    showRentPrices(data);
    showIPC();
}

// Attach
main();