// Definimos un array de imagenes
var imagenes = [
    'img/lisboa.jpg',
    'img/madrid-light.jpeg',
    'img/nueva-york.jpg',
    'img/santiago.jpg'
];


// Capturamos el selector que nos renderiza el slider de imagenes
var img = document.querySelector('.bgImage');

// Definimos un indice
var indice = 0;

// Definimos un contador de iteraciones
var iteraciones = 0;

// Creamos una función para que vaya actualizando las imagenes usando
// el atributo backgroundImage()
var updateImage = function() {
    if (indice >= imagenes.length) {
        indice = 0;
        iteraciones++;
    }

    img.style.backgroundImage = 'url(' + imagenes[indice] + ')';
    if (iteraciones >= 4) {
        clearInterval(intervalo);
    } else {
        indice++;
    }
}

// Para crear el intervalo de tiempo, creamos una variable y almacenamos en ella 
// la función setInterval, con la función creada interiormente en su interior, y
// marcando un tiempo de ejecución (10 segundos)

var intervalo = setInterval(updateImage, 10000);

// Invocamos la función
updateImage();



// ESTADIA - PRECIOS:

// noche: 120 €

// CIUDAD - TRANSPORTE:

// Nueva York = 1500 €
// Santiago de Chile = 1200 €
// Madrid = 60 €
// Lisboa = 120 €


function calcular() {

    // Definimos variables que capturen los valores introducidos en el formulario

    var noches = document.getElementById("exampleFormControlInput1").value; // campo noches

    var ciudadSeleccionada = document.getElementById("exampleFormControlSelect1").value; // campo ciudad


    // Capturamos los id's paa acceder a ellos mediante el objeto destinos que crearemos más adelante

    var ciudad = document.getElementById("ciudad");
    var nochesTotal = document.getElementById("nochesTotal");
    var precioTotal = document.getElementById("precioTotal");
    var imgSection = document.getElementById("imgSection");
    var mapaCiudad = document.getElementById("mapaCiudad");

    // Capturamos los id's de las secciones escondidas al cargar la página

    var visible = document.getElementById("destino");
    var visibleMapa = document.getElementById("mapa");

    // Definimos el precio estándar de la noche en una ciudad

    var precio = 120;

    // Definimos un bucle, en el cual se calculará el precio total en función
    // de las noches que se pasarán en la ciudad seleccionada

    var precioInt = parseInt(precio);

    for (var i = 0; i < noches; i++) {
        precioInt = precioInt + precioInt;
    }

    // Creamos un objeto destino, que contenga a la vez arrays, y donde a su vez almacenamos 
    // datos acorde a la elección del destino:
    //
    // destino_1 = Lisboa -> Información relevante a Lisboa (nombre, noches, precio, imagen, mapa) 
    // destino_2 = Madrid -> Información relevante a Madrid (nombre, noches, precio, imagen, mapa) 
    // destino_3 = Nueva York -> Información relevante a Nueva York (nombre, noches, precio, imagen, mapa) 
    // destino_4 = Santiago -> Información relevante a Santiago (nombre, noches, precio, imagen, mapa) 

    var destinos = {

        destino_1: {
            ciudad: "Lisboa",
            noches: noches,
            precio: precioInt,
            imagen: imagenes[0],
            mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99580.0348262944!2d-9.230415376307105!3d38.74360560084678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa%2C%20Portugal!5e0!3m2!1ses!2ses!4v1578496180774!5m2!1ses!2ses" width="100%" height="400rem" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
        },

        destino_2: {
            ciudad: "Madrid",
            noches: noches,
            precio: precioInt,
            imagen: imagenes[1],
            mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.13980496282!2d-3.8196190962813557!3d40.43786976140077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1578677381128!5m2!1ses!2ses" width="100%" height="400rem" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
        },

        destino_3: {
            ciudad: "Nueva York",
            noches: noches,
            precio: precioInt,
            imagen: imagenes[2],
            mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477127143!2d-74.11976341808828!3d40.69740344190139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1578677430693!5m2!1ses!2ses" width="100%" height="400rem" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
        },

        destino_4: {
            ciudad: "Santiago",
            noches: noches,
            precio: precioInt,
            imagen: imagenes[3],
            mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212998.4933796595!2d-70.76991444761987!3d-33.4727091656272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2ses!4v1578677461381!5m2!1ses!2ses" width="100%" height="400rem" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
        }
    };

    // Dependiendo del destino escogido se ejecutará un caso u otro dentro del switch...case

    switch (ciudadSeleccionada) {
        case 'Lisboa':

            ciudad.innerHTML = destinos.destino_1.ciudad;

            nochesTotal.innerHTML = destinos.destino_1.noches + " noches";
            precioTotal.innerHTML = destinos.destino_1.precio + "€";

            imgSection.src = destinos.destino_1.imagen;

            mapaCiudad.innerHTML = destinos.destino_1.mapa;

            visible.classList.remove("hidden");
            visibleMapa.classList.remove("hidden");

            break;
        case 'Madrid':

            ciudad.innerHTML = destinos.destino_2.ciudad;

            nochesTotal.innerHTML = destinos.destino_2.noches + " noches";
            precioTotal.innerHTML = destinos.destino_2.precio + "€";

            imgSection.src = destinos.destino_2.imagen;

            mapaCiudad.innerHTML = destinos.destino_2.mapa;

            visible.classList.remove("hidden");
            visibleMapa.classList.remove("hidden");

            break;

        case 'Nueva York':

            ciudad.innerHTML = destinos.destino_3.ciudad;

            nochesTotal.innerHTML = destinos.destino_3.noches + " noches";
            precioTotal.innerHTML = destinos.destino_3.precio + "€";

            imgSection.src = destinos.destino_3.imagen;

            mapaCiudad.innerHTML = destinos.destino_3.mapa;

            visible.classList.remove("hidden");
            visibleMapa.classList.remove("hidden");

            break;

        case 'Santiago':

            ciudad.innerHTML = destinos.destino_4.ciudad;

            nochesTotal.innerHTML = destinos.destino_4.noches + " noches";
            precioTotal.innerHTML = destinos.destino_4.precio + "€";

            imgSection.src = destinos.destino_4.imagen;

            mapaCiudad.innerHTML = destinos.destino_4.mapa;

            visible.classList.remove("hidden");
            visibleMapa.classList.remove("hidden");

            break;

            // Por defecto se ejecutará Lisboa

        default:

            ciudad.innerHTML = destinos.destino_1.ciudad;

            nochesTotal.innerHTML = destinos.destino_1.noches + " noches";
            precioTotal.innerHTML = destinos.destino_1.precio + "€";

            imgSection.src = destinos.destino_1.imagen;

            mapaCiudad.innerHTML = destinos.destino_1.mapa;

            visible.classList.remove("hidden");
            visibleMapa.classList.remove("hidden");

            break;
    }
}