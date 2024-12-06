document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('img'); 

    imagenes.forEach((imagen) => {
        imagen.addEventListener('click', () => {
            console.log("Imagen clickeada: ", imagen); 
            const resumen = imagen.getAttribute('data-resumen');
            console.log("Resumen: ", resumen); 

            
            if (resumen) {
                alert('Resumen: ' + resumen); 
            } else {
                alert('No hay resumen disponible');
            }
        });
    });
});


const busqueda = document.getElementById('busqueda');
const lupa = document.getElementById('lupa');
const resultados = document.getElementById('resultados');


const noticias = [
  {titulo: "México vs. Costa Rica femenil EN VIVO, hoy 30 de noviembre: hora y canal del amistoso", url: "https://www.antena2.com/futbol/mexico-vs-costa-rica-femenil-en-vivo-hoy-30-de-noviembre-hora-y-canal-del-amistoso"},
  {titulo: "Rompiendo barreras: joven con discapacidad diseña moda que inspira y transforma", url: "https://www.bluradio.com/sociedad/rompiendo-barreras-joven-con-discapacidad-disena-moda-que-inspira-y-transforma-so35"},
  {titulo: "La universidad ECCI reinventa toneladas de Jeans y los convierte en moda", url: "https://caracol.com.co/2024/11/29/la-universidad-ecci-reinventa-toneladas-de-jeans-y-los-convierte-en-moda/"}, 
  {titulo: "Ya disponible el nuevo juego gratis de Epic Games Store y anunciado los de la próxima semana", url: "https://vandal.elespanol.com/noticia/1350776144/ya-disponible-el-nuevo-juego-gratis-de-epic-games-store-y-anunciado-los-de-la-proxima-semana/"},
  {titulo: "Palworld anuncia otra gran actualización con una nueva isla seis veces más grande que Sakurajima", url: "https://vandal.elespanol.com/noticia/1350776126/palworld-anuncia-otra-gran-actualizacion-con-una-nueva-isla-seis-veces-mas-grande-que-sakurajima/"},
  {titulo: "Assassin's Creed Shadows será el primer juego desarrollado para la mitad del equipo, según Ubisoft", url:"https://vandal.elespanol.com/noticia/1350776136/assassins-creed-shadows-sera-el-primer-juego-desarrollado-para-la-mitad-del-equipo-segun-ubisoft/"},
  {titulo: "Bloodborne estará en mantenimiento el día del 30 aniversario de PlayStation y los fans pierden la cabeza", url: "https://vandal.elespanol.com/noticia/1350776141/bloodborne-estara-en-mantenimiento-el-dia-del-30-aniversario-de-playstation-y-los-fans-pierden-la-cabeza/"},
  {titulo: "El gobernador de Antioquia, Andrés Rendón, defendió proyectos clave como el túnel de La Línea y la vía al mar frente a críticas del presidente Petro", url: "https://m.elcolombiano.com/antioquia/gobernador-de-antioquia-andres-rendon-responde-a-petro-construccion-tunel-toyo-agua-uraba-y-via-al-mar-EK25941140"},
  {titulo: "La operación internacional Orión, con la participación de 60 países, incautó 225 toneladas de drogas y desmanteló rutas de narcotráfico global", url: "https://www.elespectador.com/judicial/incautan-225-toneladas-de-coca-en-operacion-internacional-contra-el-narcotrafico/"},
  {titulo: "La controversia en la Cámara de Representantes gira en torno a la inclusión unilateral de la reforma a la salud en la agenda por parte de su presidente, Jaime Salamanca", url: "https://www.elespectador.com/politica/reforma-a-la-salud-de-petro-mesa-directiva-de-la-camara-tiene-polemica-jaime-salamanca-rodrigo-tovar-noticas-hoy/"},
  {titulo: "En Busan, Corea del Sur, representantes de 170 países negocian un tratado internacional para combatir la contaminación por plástico", url: "https://www.elespectador.com/ambiente/el-historico-tratado-que-negocian-en-corea-del-sur-para-frenar-la-contaminacion-plastica/"},
  {titulo: "El café colombiano alcanzó un precio récord nominal de 3,47 dólares por libra, igualando niveles de 1977", url: "https://www.eltiempo.com/economia/sectores/cafe-colombiano-marca-record-si-es-el-valor-maximo-de-la-historia-en-terminos-reales-al-comparar-con-el-precio-de-1977-3404040"},
  {titulo: "El caso de Juan Felipe Rincón, hijo del Inspector General de la Policía Nacional, involucra su muerte tras una riña con disparos", url: "https://www.eltiempo.com/bogota/hablo-escolta-de-juan-felipe-rincon-su-relato-sera-clave-para-resolver-el-crimen-conto-que-hizo-durante-la-rina-3403978"},
  {titulo: "En el primer semestre de 2024, las deudas de hospitales y clínicas afiliados a la ACHC aumentaron a 18.9 billones de pesos", url: "https://www.eltiempo.com/salud/deudas-a-hospitales-y-clinicas-miembros-de-la-achc-aumentaron-en-mas-de-2-billones-de-pesos-entre-diciembre-de-2023-y-junio-de-2024-3403832"},
  {titulo: "La Asamblea Nacional de Venezuela aprobó la Ley Simón Bolívar, que impone inhabilitaciones políticas de hasta 60 años", url: "https://www.eltiempo.com/mundo/venezuela/que-es-la-ley-simon-bolivar-que-busca-inhabilitar-de-por-vida-a-los-opositores-en-venezuela-3404043"},
  {titulo: "Una explosión de un cilindro de gas en Patio Bonito, Bogotá, dejó dos personas heridas y destruyó una vivienda", url: "https://www.eltiempo.com/bogota/explosion-de-cilindro-de-gas-en-patio-bonito-deja-2-lesionados-y-una-vivienda-destruida-asi-quedo-3404166"},
  {titulo: "Elia Abuchaibe, una destacada diseñadora, afirma que el arte y la moda están profundamente conectados", url: "https://www.elheraldo.co/sociedad/2024/11/30/el-arte-y-la-moda-estan-conectados-elia-abuchaibe/"},
  {titulo: "Los Premios Indie Games celebraron su sexta edición en Málaga el 29 de noviembre, reconociendo la creatividad y el talento de los desarrolladores de videojuegos independientes", url: "https://vandal.elespanol.com/noticia/1350776148/los-premios-indie-games-celebran-su-sexta-edicion-en-malaga-el-viernes-29-de-noviembre/"},
  {titulo: "La Procuraduría General de la Nación rechazó la designación de 18 exjefes paramilitares, incluidos Hernán Giraldo Serna, como gestores de paz por parte del gobierno de Gustavo Petro", url: "https://www.elespectador.com/judicial/procuraduria-rechazo-la-designacion-de-hernan-giraldo-y-otros-paras-como-gestores/"},
  {titulo: "El artículo aborda el uso de solicitudes de asilo en Colombia por miembros del Tren de Aragua, como estrategia para evitar su extradición a Venezuela", url: "https://www.eltiempo.com/justicia/investigacion/que-hay-detras-de-las-solicitudes-de-asilo-de-poderosas-fichas-del-tren-de-aragua-presas-en-colombia-3404019"}
];

lupa.addEventListener('click', () => {
  const textoBusqueda = busqueda.value.trim().toLowerCase(); 
  console.log('Texto de búsqueda:', textoBusqueda);

  if (textoBusqueda !== '') {
    // Filtrar noticias que contengan el texto ingresado
    const resultadosFiltrados = noticias.filter(noticia => 
      noticia.titulo.toLowerCase().includes(textoBusqueda)
    );

    console.log('Resultados filtrados:', resultadosFiltrados); 

    resultados.innerHTML = ''; // Limpiar resultados previos
    if (resultadosFiltrados.length > 0) {
      resultadosFiltrados.forEach((resultado) => {
        const elementoResultado = document.createElement('div');
        
        if (resultado.url) {
          
          const enlace = document.createElement('a');  
          enlace.href = resultado.url; 
          enlace.textContent = resultado.titulo; 
          elementoResultado.appendChild(enlace);  

          // Hacer que al hacer clic en el enlace se redirija a la URL de la noticia
          enlace.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar el comportamiento predeterminado de enlace
            window.location.href = resultado.url; // Redirigir a la URL
          });

        } else {
          // Si no tiene URL, solo mostrar el texto
          elementoResultado.textContent = resultado.titulo + " (Sin enlace disponible)";
        }

        resultados.appendChild(elementoResultado);  // Agregar div al contenedor de resultados
      });
      resultados.style.display = 'block';
    } else {
      // Si no hay resultados, mostrar un mensaje
      resultados.innerHTML = 'No se encontraron resultados.';
      resultados.style.display = 'block';
    }
  }
});

busqueda.addEventListener('input', () => {
  const textoBusqueda = busqueda.value.trim();
  if (textoBusqueda === '') {
    resultados.style.display = 'none';
  }
});
