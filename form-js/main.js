function validarFormulario() {
    let contrasena = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Validar que las contraseñas coincidan
    if (contrasena !== confirmPassword) {
        mostrarAlertaRoja("Las contraseñas no coinciden");
        return false; // Evita el envío del formulario
    }

    // Si todo está bien, puedes enviar el formulario
    mostrarAlertaRoja("¡Formulario enviado con éxito!", false);
    return true;
}

function mostrarAlertaRoja(mensaje, error = true) {
    // Crear una alerta personalizada con color rojo o verde
    var alerta = document.createElement("div");
    alerta.innerHTML = mensaje;
    alerta.className = error ? "error-alert" : "success-alert";

    // Agregar la alerta al cuerpo del documento
    document.body.appendChild(alerta);

    // Después de unos segundos, eliminar la alerta
    setTimeout(function() {
        alerta.remove();
    }, 3000); // 3000 milisegundos = 3 segundos
}
