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


