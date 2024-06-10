document.addEventListener('DOMContentLoaded', () => {
    var mapa = L.map('mapa').setView([13.6982, -89.1913], 8.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    const eventosPorCategoria = {
        conmemoraciones: [
            { nombre: "Festividades en honor a nuestro divino señor de los milagros.", fecha: "05-06", descripcion: "Constituye la principal celebración católica de nuestro país. Su imagen original pintada por un esclavo de casta angoleña en el barrio de Pachacamilla, recibe cada año la visita de miles de fieles quienes acuden a orar y realizar sus peticiones", lat: 13.43, lng: -87.96 },
            { nombre: "Dia del sol nuevo (Los Tapujiados).", fecha: "16", descripcion: "Dicho evento es para conmemorar a las comunidades indígenas que veneran al Sol, astro mayor o gran abuelo. Es la fiesta al Sol, a la renovación de las energías espirituales, de las flores y de la vida.", lat: 13.77, lng: -88.07 },
            { nombre: "Aniversario de la masacre de 1932", fecha: "22", descripcion: "Conmemorar a las víctimas de la matanza perpetrada en enero de 1932 en represalia por los levantamientos indígenas del 22 de enero de ese año.", lat: 13.68, lng: -89.18 },
            { nombre: "Dia mundial de la cultura africana y afrodescendientes.", fecha: "24", descripcion: "Este evento rinde homenaje a las numerosas y vibrantes culturas del continente africano y de las diásporas africanas en el mundo, reforzando así el mandato de la UNESCO de promover el respeto de la diversidad cultural y la creatividad humana en todo el planeta.", lat: 13.68, lng: -89.25 }
        ],
        danzas: [
            { nombre: "El baile de los diablitos.", fecha: "05-06", descripcion: "Descripción del evento", lat: 13.49, lng: -89.45 },
            { nombre: "Los pastores.", fecha: "06", descripcion: "Descripción del evento", lat: 13.77, lng: -89.73 },
            { nombre: "Historiantes, San Antonio Abad.", fecha: "12", descripcion: "Descripción del evento", lat: 13.68, lng: -89.09 },
            { nombre: "Historiantes.", fecha: "14-20", descripcion: "Descripción del evento", lat: 13.66, lng: -89.43 },
            { nombre: "Los Tapujeados.", fecha: "15-17", descripcion: "Descripción del evento", lat: 13.76, lng: -88.08 },
            { nombre: "Historiantes; San Sebastián Texincal.", fecha: "15-22", descripcion: "Descripción del evento", lat: 13.43, lng: -89.10 },
            { nombre: "Los emplumados de Cacaopera.", fecha: "16-17", descripcion: "Descripción del evento", lat: 13.70, lng: -89.35 },
            { nombre: "Baile del toro.", fecha: "17", descripcion: "Descripción del evento", lat: 13.65, lng: -89.20 },
            { nombre: "Historiantes.", fecha: "18-20", descripcion: "Descripción del evento", lat: 13.38, lng: -88.26 },
            { nombre: "Historiantes.", fecha: "20", descripcion: "Descripción del evento", lat: 13.40, lng: -88.46 },
            { nombre: "Viejos enmascarados.", fecha: "23-28", descripcion: "Descripción del evento", lat: 13.43, lng: -88.49 },
            { nombre: "Torito Pinto.", fecha: "25-02 (02-02)", descripcion: "Descripción del evento", lat: 13.37, lng: -88.55 },
            { nombre: "El Toro Pichel.", fecha: "25-02 (02-02)", descripcion: "Descripción del evento", lat: 13.30, lng: -88.50 },
            { nombre: "Historiantes.", fecha: "30", descripcion: "Descripción del evento", lat: 13.53, lng: -88.25 }
        ],
        festivales: [
            { nombre: "El baile de los diablitos.", fecha: "05-06", descripcion: "Descripción del evento", lat: 13.49, lng: -89.45 },
            { nombre: "Los pastores.", fecha: "06", descripcion: "Descripción del evento", lat: 13.77, lng: -89.73 },
            { nombre: "Historiantes, San Antonio Abad.", fecha: "12", descripcion: "Descripción del evento", lat: 13.68, lng: -89.09 },
            { nombre: "Historiantes.", fecha: "14-20", descripcion: "Descripción del evento", lat: 13.66, lng: -89.43 },
            { nombre: "Los Tapujeados.", fecha: "15-17", descripcion: "Descripción del evento", lat: 13.76, lng: -88.08 },
            { nombre: "Historiantes; San Sebastián Texincal.", fecha: "15-22", descripcion: "Descripción del evento", lat: 13.43, lng: -89.10 },
            { nombre: "Los emplumados de Cacaopera.", fecha: "16-17", descripcion: "Descripción del evento", lat: 13.70, lng: -89.35 },
            { nombre: "Baile del toro.", fecha: "17", descripcion: "Descripción del evento", lat: 13.65, lng: -89.20 },
            { nombre: "Historiantes.", fecha: "18-20", descripcion: "Descripción del evento", lat: 13.38, lng: -88.26 },
            { nombre: "Historiantes.", fecha: "20", descripcion: "Descripción del evento", lat: 13.40, lng: -88.46 },
            { nombre: "Viejos enmascarados.", fecha: "23-28", descripcion: "Descripción del evento", lat: 13.43, lng: -88.49 },
            { nombre: "Torito Pinto.", fecha: "25-02 (02-02)", descripcion: "Descripción del evento", lat: 13.37, lng: -88.55 },
            { nombre: "El Toro Pichel.", fecha: "25-02 (02-02)", descripcion: "Descripción del evento", lat: 13.30, lng: -88.50 },
            { nombre: "Historiantes.", fecha: "30", descripcion: "Descripción del evento", lat: 13.53, lng: -88.25 }
        ],
        fiestasPatronales: [
            {nombre: "En honor a San Esteban Mártir.", fecha: "01-06", descripcion: "kjaxomwkwmos", lat: 13.70, lng: -89.46},
            {nombre: "En honor a La Virgen de los Remedios", fecha: "03-06", descripcion: "oikwsnmckios", lat: 13.68, lng: -89.18},
            {nombre: "Divino Señor de los Milagros", fecha: "06", descripcion: "oiwnwiodsnsiojkwj", lat: 13.25, lng: -87.57},
            {nombre: "En honor al Cristo de Esquipulas o Cristo Negro de Juayúa. ", fecha: "08-15", descripcion: "kjkensck", lat: 13.84, lng: -89.74},
            {nombre: "En honor al Señor de las Misericordias.", fecha: "10-15", descripcion: "kladskl", lat: 13.95, lng: -89.18},
            {nombre: "En honor a San Francisco de Asís.", fecha: "11-13", descripcion: "kjjkjkkkjjk", lat: 13.08, lng: -88.57},
            {nombre: "En honor al Señor de Esquipulas.", fecha: "12-15", descripcion: "kwerkewk", lat: 13.32, lng: -88.22},
            {nombre: "En honor al Cristo de Esquipulas.", fecha: "13-15", descripcion: "kerjkerkfk", lat: 13.42, lng: -89.20},
        ],
        tradiciones: [
            { nombre: "El baile de los diablitos.", fecha: "05-06", descripcion: "Descripción del evento", lat: 13.49, lng: -89.45 },
            { nombre: "Los pastores.", fecha: "06", descripcion: "Descripción del evento", lat: 13.77, lng: -89.73 },
            { nombre: "Historiantes, San Antonio Abad.", fecha: "12", descripcion: "Descripción del evento", lat: 13.68, lng: -89.09 },
            { nombre: "Historiantes.", fecha: "14-20", descripcion: "Descripción del evento", lat: 13.66, lng: -89.43 },
            { nombre: "Los Tapujeados.", fecha: "15-17", descripcion: "Descripción del evento", lat: 13.76, lng: -88.08 },
            { nombre: "Historiantes; San Sebastián Texincal.", fecha: "15-22", descripcion: "Descripción del evento", lat: 13.43, lng: -89.10 },
            { nombre: "Los emplumados de Cacaopera.", fecha: "16-17", descripcion: "Descripción del evento", lat: 13.70, lng: -89.35 },
            { nombre: "Baile del toro.", fecha: "17", descripcion: "Descripción del evento", lat: 13.65, lng: -89.20 },
            { nombre: "Historiantes.", fecha: "18-20", descripcion: "Descripción del evento", lat: 13.38, lng: -88.26 },
            { nombre: "Historiantes.", fecha: "20", descripcion: "Descripción del evento", lat: 13.40, lng: -88.46 },
            { nombre: "Viejos enmascarados.", fecha: "23-28", descripcion: "Descripción del evento", lat: 13.43, lng: -88.49 },
            { nombre: "Torito Pinto.", fecha: "25-02 (02-02)", descripcion: "Descripción del evento", lat: 13.37, lng: -88.55 },
            { nombre: "El Toro Pichel.", fecha: "25-02 (02-02)", descripcion: "Descripción del evento", lat: 13.30, lng: -88.50 },
            { nombre: "Historiantes.", fecha: "30", descripcion: "Descripción del evento", lat: 13.53, lng: -88.25 }
        ]
    };
    

    // Definir el icono rojo
    var redIcon = L.icon({
        iconUrl: 'https://i.pinimg.com/originals/fa/69/46/fa6946d4f340a7535455c0dee07e8c19.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });

    // Agregar eventos al mapa al cargar el documento
    mostrarEventosPorCategoria('conmemoraciones');
    mostrarEventosPorCategoria('danzas');
    mostrarEventosPorCategoria('festivales');
    mostrarEventosPorCategoria('fiestasPatronales');
    mostrarEventosPorCategoria('tradiciones');

    // Función para mostrar eventos por categoría
    function mostrarEventosPorCategoria(categoria) {
        // Obtener los eventos de la categoría seleccionada
        const eventos = eventosPorCategoria[categoria];

        // Remover todos los marcadores del mapa
        mapa.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                mapa.removeLayer(layer);
            }
        });

        // Agregar marcadores para cada evento de la categoría
        eventos.forEach(evento => {
            const popupContent = `
                <strong>${evento.nombre}</strong><br>
                <em>Fecha:</em> ${evento.fecha}<br>
                <em>Descripción:</em> ${evento.descripcion}
            `;
            L.marker([evento.lat, evento.lng], { icon: redIcon }).addTo(mapa)
                .bindPopup(popupContent);
        });
        
    }

    // Obtener elementos del submenu y agregar evento click
    const submenuItems = document.querySelectorAll('.dropdown-submenu a.dropdown-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', function() {
            const categoria = this.innerText.toLowerCase();
            mostrarEventosPorCategoria(categoria);
        });
    });

});


function mostrarOcultar(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        setTimeout(() => {
            element.style.display = "none";
        }, displayTime);
    } else {
        element.style.display = "none";
    }
}

function cerrarTarjeta(idTarjeta) {
    document.getElementById(idTarjeta).style.display = "none"; // Oculta la tarjeta descriptiva
}
function mostrarEventosPorCategoria(categoria) {
    // Aquí deberías implementar la lógica para mostrar eventos por la categoría seleccionada
    console.log("Mostrar eventos por la categoría:", categoria);
}
