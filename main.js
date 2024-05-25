function mostrarImagen(imagen) {
    var imagenPrincipal = document.getElementById("imagen1").querySelector("img");
    var tempSrc = imagenPrincipal.src;

    // Cambia la fuente de la imagen seleccionada con la fuente de la imagen principal
    imagenPrincipal.src = imagen.src;

    // Cambia la fuente de la imagen principal con la fuente de la imagen seleccionada
    imagen.src = tempSrc;
}
window.onload = function() {
    var checkbox = document.getElementById('menu-toggle-checkbox');
    var closeIcon = document.querySelector('.close-icon');

    // Mostrar la X cuando el menú está activo
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            closeIcon.style.display = 'inline-block';
        } else {
            closeIcon.style.display = 'none';
        }
    });
};