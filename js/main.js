var ico_carpeta = document.getElementById('carpeta');
var ventana =  document.getElementById('ventana');

function activar(){
   ventana.classList.add("activo");
}

ico_carpeta.addEventListener('click', activar);
