const imagenes = document.querySelectorAll('.contenedor_principal img, .contenedor_noticias img, .contenedor_segmentos img');
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        const resumen = imagen.getAttribute('data-resumen');
        const resumenElemento = document.createElement('div');
        resumenElemento.innerHTML = `
      <h2>Resumen</h2>
      <p>${resumen}</p>
    `;
        document.body.appendChild(resumenElemento);
    });
});

